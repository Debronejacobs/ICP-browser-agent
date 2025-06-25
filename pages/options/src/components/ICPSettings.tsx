import { icpAuthService } from '@src/ICPAuthService';
import React, { useState, useEffect } from 'react';
import { Button } from '@extension/ui';
import { LogIn, LogOut, CheckCircle, AlertTriangle, Loader2 } from 'lucide-react';

export default function ICPSettings() {
  const [principal, setPrincipal] = useState<string | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      setIsAuthReady(false);
      await icpAuthService.waitForReady();
      const p = await icpAuthService.getPrincipal();
      setPrincipal(p);
      setIsAuthReady(true);
    };
    checkAuth();
  }, []);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await icpAuthService.login();
      const p = await icpAuthService.getPrincipal();
      setPrincipal(p);
    } catch (error) {
      console.error('ICP Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await icpAuthService.logout();
      setPrincipal(null);
    } catch (error) {
      console.error('ICP Logout failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Styling
  const containerClasses = 'p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg max-w-2xl mx-auto mt-8';
  const titleClasses = 'text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100';
  const textMutedClasses = 'text-slate-500 dark:text-slate-400';
  const textEmphasisClasses = 'text-sky-600 dark:text-sky-400';
  const cardClasses = 'bg-slate-100 dark:bg-slate-800 p-4 rounded-lg';

  const buttonBaseClasses =
    'flex items-center justify-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const primaryButtonClasses = `${buttonBaseClasses} bg-sky-500 hover:bg-sky-600 text-white focus:ring-sky-500 focus:ring-offset-white dark:focus:ring-offset-slate-900`;
  const secondaryButtonClasses = `${buttonBaseClasses} bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-100 focus:ring-slate-400 focus:ring-offset-white dark:focus:ring-offset-slate-900`;

  if (!isAuthReady) {
    return (
      <div className={containerClasses}>
        <h2 className={titleClasses}>ICP Authentication</h2>
        <div className="flex flex-col items-center justify-center py-10">
          <Loader2 className={`h-12 w-12 animate-spin ${textMutedClasses} mb-4`} />
          <p className={`text-lg ${textMutedClasses}`}>Checking authentication status...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <h2 className={titleClasses}>Internet Computer Protocol (ICP) Authentication</h2>

      {principal ? (
        <div className="space-y-6">
          <div className={`flex items-start space-x-4 ${cardClasses}`}>
            <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-green-600 dark:text-green-400">Authenticated Successfully</p>
              <p className={`text-sm ${textMutedClasses}`}>Principal ID:</p>
              <p className={`mt-1 font-mono text-sm break-all ${textEmphasisClasses}`}>{principal}</p>
            </div>
          </div>

          <Button onClick={handleLogout} className={`${secondaryButtonClasses} w-full sm:w-auto`} disabled={isLoading}>
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <LogOut className="h-5 w-5" />}
            <span>Logout from ICP</span>
          </Button>
        </div>
      ) : (
        <div className="space-y-6 text-center">
          <AlertTriangle className="h-12 w-12 mx-auto text-amber-500" />
          <p className="text-lg font-semibold text-slate-700 dark:text-slate-200">Not Connected</p>
          <p className={textMutedClasses}>
            Connect your Internet Identity to manage ICP-related settings and features.
          </p>
          <Button onClick={handleLogin} className={`${primaryButtonClasses} w-full sm:w-auto`} disabled={isLoading}>
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <LogIn className="h-5 w-5" />}
            <span>Login with Internet Identity</span>
          </Button>
        </div>
      )}
    </div>
  );
}
