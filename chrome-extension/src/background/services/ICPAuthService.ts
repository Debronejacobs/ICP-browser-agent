// extension/services/ICPAuthService.ts (example path)
import { AuthClient } from '@dfinity/auth-client';
import { Actor, Identity } from '@dfinity/agent'; // Actor might be used later for canister calls

const IDENTITY_PROVIDER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://identity.ic0.app'
    : 'http://localhost:4943/?canisterId=<YOUR_LOCAL_II_CANISTER_ID>'; // Replace with your local II canister ID if testing locally

class ICPAuthService {
  private authClient: AuthClient | null = null;
  private identity: Identity | null = null;
  private principal: string | null = null; // Store as string for convenience

  private readyPromise: Promise<void>;
  private resolveReady!: () => void;

  constructor() {
    this.readyPromise = new Promise(resolve => {
      this.resolveReady = resolve;
    });
    this.init();
  }

  private async init() {
    try {
      this.authClient = await AuthClient.create();
      const isAuthenticated = await this.authClient.isAuthenticated();

      if (isAuthenticated) {
        this.handleAuthenticated(this.authClient);
      }
    } catch (error) {
      console.error('Error initializing AuthClient:', error);
    } finally {
      this.resolveReady(); // Signal that initialization (or attempt) is complete
    }
  }

  public async waitForReady(): Promise<void> {
    return this.readyPromise;
  }

  private handleAuthenticated(client: AuthClient) {
    this.identity = client.getIdentity();
    this.principal = this.identity.getPrincipal().toText();
    console.log('Authenticated! Principal:', this.principal);
    // Here you would typically emit an event or update a reactive state
    // so other parts of the extension know the user is logged in.
  }

  public async login(): Promise<void> {
    await this.waitForReady();
    if (!this.authClient) {
      console.error('AuthClient not initialized');
      return;
    }

    const isAuthenticated = await this.authClient.isAuthenticated();
    if (isAuthenticated) {
      console.log('Already authenticated.');
      if (!this.principal) this.handleAuthenticated(this.authClient); // Ensure state is set
      return;
    }

    try {
      await new Promise<void>((resolve, reject) => {
        this.authClient!.login({
          identityProvider: IDENTITY_PROVIDER_URL,
          onSuccess: () => {
            this.handleAuthenticated(this.authClient!);
            resolve();
          },
          onError: error => {
            console.error('Login failed:', error);
            reject(error);
          },
          // Optional: windowOpenerFeatures, derivationOrigin, maxTimeToLive
        });
      });
    } catch (error) {
      // Handled by onError
    }
  }

  public async logout(): Promise<void> {
    await this.waitForReady();
    if (!this.authClient) return;

    await this.authClient.logout();
    this.identity = null;
    this.principal = null;
    console.log('Logged out.');
    // Emit logout event/update state
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
    await this.waitForReady();
    if (!this.authClient) return false;
    return this.authClient.isAuthenticated();
  }
}

export const icpAuthService = new ICPAuthService();
