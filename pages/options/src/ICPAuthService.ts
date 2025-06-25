// extension/services/ICPAuthService.ts
import { AuthClient } from '@dfinity/auth-client';
import { Actor, Identity, HttpAgent } from '@dfinity/agent';

const IDENTITY_PROVIDER_URL = 'https://identity.ic0.app';
const AUTH_CLIENT_OPTIONS = {
  idleOptions: {
    idleTimeout: 1000 * 60 * 30, // 30 minutes
    disableDefaultIdleCallback: true,
  },
} as const;

export enum AuthState {
  INITIALIZING = 'initializing',
  AUTHENTICATED = 'authenticated',
  UNAUTHENTICATED = 'unauthenticated',
  ERROR = 'error',
}

export interface AuthEventData {
  state: AuthState;
  principal?: string;
  identity?: Identity;
  error?: string;
}

export type AuthEventListener = (data: AuthEventData) => void;

export class ICPAuthService {
  private authClient: AuthClient | null = null;
  private identity: Identity | null = null;
  private principal: string | null = null;
  private currentState: AuthState = AuthState.INITIALIZING;

  private readyPromise: Promise<void>;
  private resolveReady!: () => void;
  private rejectReady!: (error: Error) => void;

  private eventListeners: Set<AuthEventListener> = new Set();
  private isInitialized = false;
  private initializationError: Error | null = null;

  constructor() {
    this.readyPromise = new Promise((resolve, reject) => {
      this.resolveReady = resolve;
      this.rejectReady = reject;
    });
    this.init();
  }

  private isError(error: unknown): error is Error {
    return error instanceof Error;
  }

  private toError(error: unknown): Error {
    if (this.isError(error)) {
      return error;
    }
    if (typeof error === 'string') {
      return new Error(error);
    }
    return new Error('Unknown error occurred');
  }

  private async init(): Promise<void> {
    try {
      this.authClient = await AuthClient.create(AUTH_CLIENT_OPTIONS);

      // Set up idle callback
      if (this.authClient.idleManager) {
        this.authClient.idleManager.registerCallback(() => {
          this.handleIdleTimeout();
        });
      }

      const isAuthenticated = await this.authClient.isAuthenticated();

      if (isAuthenticated) {
        this.handleAuthenticated();
        this.setState(AuthState.AUTHENTICATED);
      } else {
        this.setState(AuthState.UNAUTHENTICATED);
      }

      this.isInitialized = true;
      this.resolveReady();
    } catch (error) {
      const authError = this.toError(error);
      this.initializationError = authError;
      this.setState(AuthState.ERROR, { error: authError.message });
      this.rejectReady(authError);
      console.error('Error initializing AuthClient:', authError);
    }
  }

  private handleIdleTimeout(): void {
    console.log('Auth session idle timeout');
    this.logout();
  }

  private handleAuthenticated(): void {
    if (!this.authClient) return;

    try {
      this.identity = this.authClient.getIdentity();
      this.principal = this.identity.getPrincipal().toText();
      console.log('Authenticated! Principal:', this.principal);
    } catch (error) {
      console.error('Error handling authentication:', error);
      this.setState(AuthState.ERROR, {
        error: this.toError(error).message,
      });
    }
  }

  private setState(state: AuthState, additionalData: Partial<AuthEventData> = {}): void {
    this.currentState = state;

    const eventData: AuthEventData = {
      state,
      principal: this.principal || undefined,
      identity: this.identity || undefined,
      ...additionalData,
    };

    this.notifyListeners(eventData);
  }

  private notifyListeners(data: AuthEventData): void {
    this.eventListeners.forEach(listener => {
      try {
        listener(data);
      } catch (error) {
        console.error('Error in auth event listener:', error);
      }
    });
  }

  public addEventListener(listener: AuthEventListener): () => void {
    this.eventListeners.add(listener);

    // Immediately notify new listener of current state
    if (this.isInitialized) {
      const currentData: AuthEventData = {
        state: this.currentState,
        principal: this.principal || undefined,
        identity: this.identity || undefined,
      };

      try {
        listener(currentData);
      } catch (error) {
        console.error('Error notifying new listener:', error);
      }
    }

    // Return cleanup function
    return () => {
      this.eventListeners.delete(listener);
    };
  }

  public async waitForReady(): Promise<void> {
    return this.readyPromise;
  }

  public async login(
    options: {
      maxTimeToLive?: bigint;
      windowOpenerFeatures?: string;
      derivationOrigin?: string;
    } = {},
  ): Promise<void> {
    try {
      await this.waitForReady();
    } catch (error) {
      throw new Error(`Cannot login: ${this.initializationError?.message || 'Service not ready'}`);
    }

    if (!this.authClient) {
      throw new Error('AuthClient not initialized');
    }

    const isAuthenticated = await this.authClient.isAuthenticated();
    if (isAuthenticated) {
      console.log('Already authenticated.');
      if (!this.principal) {
        this.handleAuthenticated();
        this.setState(AuthState.AUTHENTICATED);
      }
      return;
    }

    this.setState(AuthState.INITIALIZING);

    return new Promise<void>((resolve, reject) => {
      this.authClient!.login({
        identityProvider: IDENTITY_PROVIDER_URL,
        maxTimeToLive: options.maxTimeToLive,
        windowOpenerFeatures: options.windowOpenerFeatures,
        derivationOrigin: options.derivationOrigin,
        onSuccess: () => {
          try {
            this.handleAuthenticated();
            this.setState(AuthState.AUTHENTICATED);
            resolve();
          } catch (error) {
            const authError = this.toError(error);
            this.setState(AuthState.ERROR, { error: authError.message });
            reject(authError);
          }
        },
        onError: error => {
          const authError = this.toError(error);
          console.error('Login failed:', authError);
          this.setState(AuthState.UNAUTHENTICATED, { error: authError.message });
          reject(authError);
        },
      });
    });
  }

  public async logout(): Promise<void> {
    try {
      await this.waitForReady();
    } catch (error) {
      // Even if not ready, we should attempt cleanup
      console.warn('Logging out before service ready:', error);
    }

    if (this.authClient) {
      try {
        await this.authClient.logout();
      } catch (error) {
        console.error('Error during logout:', error);
      }
    }

    this.identity = null;
    this.principal = null;
    this.setState(AuthState.UNAUTHENTICATED);
    console.log('Logged out.');
  }

  public async getPrincipal(): Promise<string | null> {
    await this.waitForReady();
    return this.principal;
  }

  public async getIdentity(): Promise<Identity | null> {
    await this.waitForReady();
    return this.identity;
  }

  public async isAuthenticated(): Promise<boolean> {
    try {
      await this.waitForReady();
      if (!this.authClient) return false;
      return await this.authClient.isAuthenticated();
    } catch (error) {
      console.error('Error checking authentication status:', error);
      return false;
    }
  }

  public getCurrentState(): AuthState {
    return this.currentState;
  }

  public getInitializationError(): Error | null {
    return this.initializationError;
  }

  // Utility method to create actors with authenticated identity
  public async createActor<T>(
    canisterId: string,
    interfaceFactory: any, // IDL interface factory
    options: {
      host?: string;
    } = {},
  ): Promise<T> {
    const identity = await this.getIdentity();
    if (!identity) {
      throw new Error('Not authenticated - cannot create actor');
    }

    try {
      const agent = new HttpAgent({
        identity,
        host: options.host || 'https://ic0.app',
      });

      // Fetch root key for local development
      if (options.host && options.host.includes('localhost')) {
        await agent.fetchRootKey();
      }

      return Actor.createActor<T>(interfaceFactory, {
        agent,
        canisterId,
      });
    } catch (error) {
      console.error('Error creating actor:', error);
      throw new Error(`Failed to create actor: ${this.toError(error).message}`);
    }
  }

  // Clean up resources
  public destroy(): void {
    this.eventListeners.clear();

    if (this.authClient && this.authClient.idleManager) {
      try {
        this.authClient.idleManager.exit();
      } catch (error) {
        console.error('Error cleaning up idle manager:', error);
      }
    }
  }
}

// Singleton instance
export const icpAuthService = new ICPAuthService();

// Example usage for React components or other UI frameworks:
/*
import { icpAuthService, AuthState, AuthEventData } from './ICPAuthService';

// In a React component:
useEffect(() => {
  const unsubscribe = icpAuthService.addEventListener((data: AuthEventData) => {
    switch (data.state) {
      case AuthState.AUTHENTICATED:
        console.log('User logged in:', data.principal);
        break;
      case AuthState.UNAUTHENTICATED:
        console.log('User logged out');
        break;
      case AuthState.ERROR:
        console.error('Auth error:', data.error);
        break;
    }
  });

  return unsubscribe; // Cleanup on unmount
}, []);

// Login
const handleLogin = async () => {
  try {
    await icpAuthService.login({
      maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000), // 7 days in nanoseconds
    });
  } catch (error) {
    console.error('Login failed:', error);
  }
};

// Create an authenticated actor
const createMyActor = async () => {
  try {
    const actor = await icpAuthService.createActor(
      'canister-id',
      MyCanisterInterface,
      { host: 'https://ic0.app' }
    );
    return actor;
  } catch (error) {
    console.error('Failed to create actor:', error);
  }
};
*/
