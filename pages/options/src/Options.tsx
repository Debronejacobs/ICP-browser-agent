import { useState, useEffect } from 'react';
import '@src/Options.css'; // Assuming this contains global styles or font imports
import { Button } from '@extension/ui';
import { withErrorBoundary, withSuspense } from '@extension/shared';
import { GeneralSettings } from './components/GeneralSettings';
import { ModelSettings } from './components/ModelSettings';
import { FirewallSettings } from './components/FirewallSettings';
import ICPSettings from './components/ICPSettings';
import { Settings, BarChart3, Shield, HelpCircle, Network, LucideIcon } from 'lucide-react';

type TabTypes = 'general' | 'models' | 'firewall' | 'help' | 'ICP';

interface Tab {
  id: TabTypes;
  icon: LucideIcon;
  label: string;
}

const TABS: Tab[] = [
  { id: 'general', icon: Settings, label: 'General' },
  { id: 'models', icon: BarChart3, label: 'Models' },
  { id: 'firewall', icon: Shield, label: 'Firewall' },
  { id: 'ICP', icon: Network, label: 'ICP' }, // Grouped with other settings tabs
  { id: 'help', icon: HelpCircle, label: 'Help' }, // Help tab is conventionally last
];

const Options = () => {
  const [activeTab, setActiveTab] = useState<TabTypes>('models');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect for system dark mode preference
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Function to update state based on media query
    const updateMode = () => setIsDarkMode(darkModeMediaQuery.matches);

    updateMode(); // Set initial mode

    // Listener for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleTabClick = (tabId: TabTypes) => {
    if (tabId === 'help') {
      window.open('https://nanobrowser.ai/docs', '_blank');
      // Help tab does not become the activeTab
    } else {
      setActiveTab(tabId);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralSettings isDarkMode={isDarkMode} />;
      case 'models':
        return <ModelSettings isDarkMode={isDarkMode} />;
      case 'firewall':
        return <FirewallSettings isDarkMode={isDarkMode} />;
      case 'ICP':
        // ICPSettings was not passed isDarkMode in the original, respecting that.
        return <ICPSettings />;
      default:
        // Fallback content if no tab is active or an unknown tab is set
        return <div className="p-6 text-center">Please select a settings category.</div>;
    }
  };

  // Dynamic classes based on dark mode
  const themeContainerClasses = isDarkMode
    ? 'bg-slate-900 text-slate-200'
    : "bg-[url('/bg.jpg')] bg-cover bg-center text-slate-800";

  const navClasses = `w-60 flex-shrink-0 border-r p-6 backdrop-blur-md ${
    // Updated width, padding, blur
    isDarkMode
      ? 'border-slate-700 bg-slate-800/75' // Adjusted opacity for better contrast
      : 'border-slate-300/70 bg-white/75' // Adjusted opacity for readability over background image
  }`;

  const mainContentClasses = `flex-1 p-8 overflow-y-auto backdrop-blur-md ${
    // Added overflow, blur
    isDarkMode
      ? 'bg-slate-800/50' // More transparent than nav for depth
      : 'bg-white/50' // More transparent than nav for depth
  }`;

  return (
    <div className={`flex min-h-screen min-w-[768px] ${themeContainerClasses}`}>
      {/* Vertical Navigation Bar */}
      <nav className={navClasses}>
        <div className="mb-10">
          <h1 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-sky-700'}`}>Settings</h1>
        </div>
        <ul className="space-y-2">
          {' '}
          {/* Consistent spacing */}
          {TABS.map(tab => {
            const isActive = activeTab === tab.id;
            const IconComponent = tab.icon;

            let buttonClasses = `flex w-full items-center space-x-3 rounded-md px-3.5 py-2.5 text-left text-sm transition-all duration-200 ease-in-out group focus-visible:outline-none focus-visible:ring-2`;
            let iconClasses = `h-5 w-5 flex-shrink-0 transition-colors duration-200 ease-in-out`;

            if (isDarkMode) {
              buttonClasses += isActive
                ? ' bg-sky-600 text-white font-semibold shadow-sm'
                : ' text-slate-300 font-medium hover:bg-slate-700/60 hover:text-slate-100';
              buttonClasses += ' focus-visible:ring-sky-500 focus-visible:ring-offset-slate-800/75'; // Adjusted offset for nav bg

              iconClasses += isActive ? ' text-sky-100' : ' text-slate-400 group-hover:text-slate-200';
            } else {
              // Light Mode
              buttonClasses += isActive
                ? ' bg-sky-500 text-white font-semibold shadow-sm'
                : ' text-slate-600 font-medium hover:bg-sky-500/10 hover:text-sky-700';
              buttonClasses += ' focus-visible:ring-sky-500 focus-visible:ring-offset-white/75'; // Adjusted offset for nav bg

              iconClasses += isActive ? ' text-sky-100' : ' text-slate-500 group-hover:text-sky-600';
            }

            return (
              <li key={tab.id}>
                <Button
                  onClick={() => handleTabClick(tab.id)}
                  className={buttonClasses}
                  aria-current={isActive && tab.id !== 'help' ? 'page' : undefined}>
                  <IconComponent className={iconClasses} aria-hidden="true" />
                  <span>{tab.label}</span>
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className={mainContentClasses}>
        <div className="mx-auto min-w-[512px] max-w-screen-lg">{renderTabContent()}</div>
      </main>
    </div>
  );
};

// Enhanced Loading and Error states for Suspense and ErrorBoundary
const CenteredMessage = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex h-screen w-screen items-center justify-center text-xl font-medium ${className}`}>
    {children}
  </div>
);

export default withErrorBoundary(
  withSuspense(Options, <CenteredMessage>Loading Settings...</CenteredMessage>),
  <CenteredMessage className="text-red-600 dark:text-red-400">
    An error occurred while loading settings.
  </CenteredMessage>,
);
