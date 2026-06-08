import { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
}

const CONSENT_KEY = 'bbb_cookie_consent';
const PREFERENCES_KEY = 'bbb_cookie_preferences';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: true,  // Default analytics enabled
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    } else {
      // Load existing preferences and apply them
      const savedPreferences = localStorage.getItem(PREFERENCES_KEY);
      if (savedPreferences) {
        const prefs = JSON.parse(savedPreferences);
        setPreferences(prefs);
        applyConsent(prefs);
      }
    }
  }, []);

  const applyConsent = (prefs: CookiePreferences) => {
    // Enable/disable Google Analytics based on consent
    if (prefs.analytics) {
      // Enable Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted'
        });
      }
    } else {
      // Disable Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied'
        });
      }
    }
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem(CONSENT_KEY, 'true');
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(allAccepted));
    applyConsent(allAccepted);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleManagePreferences = () => {
    setShowPreferences(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(CONSENT_KEY, 'true');
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
    applyConsent(preferences);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleTogglePreference = (key: keyof CookiePreferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Banner - No backdrop, users can interact with page */}
      <div className="fixed bottom-0 left-0 right-0 z-[101] p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          {!showPreferences ? (
            // Main consent banner
            <div className="glass rounded-2xl p-6 md:p-8 border border-white/60 dark:border-gray-700 shadow-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-bit-lavender to-bit-red flex items-center justify-center">
                    <Cookie className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-bit-dark dark:text-white mb-2">
                    But first, cookies...
                  </h3>
                  <p className="text-bit-dark/70 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                    We use cookies to improve your experience and analyze website traffic. You can choose which cookies to accept.{' '}
                    <Link to="/privacy" className="text-bit-lavender hover:text-bit-red underline transition-colors">
                      Read our Privacy Policy
                    </Link>
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                  <button
                    onClick={handleManagePreferences}
                    className="px-6 py-3 rounded-xl border-2 border-bit-lavender text-bit-lavender font-bold hover:bg-bit-lavender/10 dark:hover:bg-bit-lavender/20 transition-all whitespace-nowrap"
                  >
                    Manage Preferences
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-bit-lavender to-bit-red text-white font-bold hover:shadow-lg transition-all whitespace-nowrap"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Preferences panel
            <div className="glass rounded-2xl p-6 md:p-8 border border-white/60 dark:border-gray-700 shadow-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bit-turquoise to-bit-green flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-bit-dark dark:text-white">
                    Cookie Preferences
                  </h3>
                </div>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="w-8 h-8 rounded-lg hover:bg-bit-dark/5 dark:hover:bg-gray-700 flex items-center justify-center transition-colors"
                  aria-label="Close preferences"
                >
                  <X className="w-5 h-5 text-bit-dark/60 dark:text-gray-400" />
                </button>
              </div>

              <p className="text-bit-dark/70 dark:text-gray-300 text-sm mb-6">
                Manage your cookie preferences below. You can enable or disable different types of cookies according to your preferences.
              </p>

              <div className="space-y-4">
                {/* Essential Cookies - Always On */}
                <div className="p-4 rounded-xl bg-bit-dark/5 dark:bg-gray-800/50 border border-bit-dark/10 dark:border-gray-700">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-grow">
                      <h4 className="font-display font-bold text-bit-dark dark:text-white mb-1">
                        Essential Cookies
                      </h4>
                      <p className="text-sm text-bit-dark/60 dark:text-gray-400">
                        These cookies are necessary for the website to function and cannot be disabled. They enable core functionality such as security, network management, and accessibility.
                      </p>
                    </div>
                    <div className="shrink-0">
                      <div className="px-3 py-1 rounded-full bg-emerald-600 dark:bg-emerald-600 text-white text-xs font-bold">
                        Always On
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 rounded-xl border border-bit-dark/10 dark:border-gray-700 hover:border-bit-lavender/30 dark:hover:border-bit-lavender/50 transition-colors bg-white/40 dark:bg-gray-800/40">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-grow">
                      <h4 className="font-display font-bold text-bit-dark dark:text-white mb-1">
                        Analytics Cookies
                      </h4>
                      <p className="text-sm text-bit-dark/60 dark:text-gray-400">
                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Analytics to improve user experience.
                      </p>
                    </div>
                    <div className="shrink-0">
                      <button
                        onClick={() => handleTogglePreference('analytics')}
                        className={`relative w-14 h-8 rounded-full transition-colors ${
                          preferences.analytics ? 'bg-bit-lavender' : 'bg-bit-dark/20 dark:bg-gray-700'
                        }`}
                        aria-label="Toggle analytics cookies"
                      >
                        <div
                          className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                            preferences.analytics ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 rounded-xl border border-bit-dark/10 dark:border-gray-700 hover:border-bit-lavender/30 dark:hover:border-bit-lavender/50 transition-colors bg-white/40 dark:bg-gray-800/40">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-grow">
                      <h4 className="font-display font-bold text-bit-dark dark:text-white mb-1">
                        Marketing Cookies
                      </h4>
                      <p className="text-sm text-bit-dark/60 dark:text-gray-400">
                        These cookies track your online activity to help us deliver more relevant advertising and measure the effectiveness of our campaigns. Currently not in use.
                      </p>
                    </div>
                    <div className="shrink-0">
                      <button
                        onClick={() => handleTogglePreference('marketing')}
                        className={`relative w-14 h-8 rounded-full transition-colors ${
                          preferences.marketing ? 'bg-bit-lavender' : 'bg-bit-dark/20 dark:bg-gray-700'
                        }`}
                        aria-label="Toggle marketing cookies"
                      >
                        <div
                          className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                            preferences.marketing ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-bit-dark/10 dark:border-gray-700">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="flex-1 px-6 py-3 rounded-xl border-2 border-bit-dark/20 dark:border-gray-600 text-bit-dark/70 dark:text-gray-300 font-bold hover:bg-bit-dark/5 dark:hover:bg-gray-700 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-bit-lavender to-bit-red text-white font-bold hover:shadow-lg transition-all"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
