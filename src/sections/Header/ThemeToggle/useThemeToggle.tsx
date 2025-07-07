import { useState, useEffect } from 'react';

export const useThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const setTheme = (theme: 'dark' | 'light') => {
    document.cookie = `theme=${theme}; path=/; max-age=31536000`;
    document.documentElement.setAttribute('data-theme', theme);
    setIsDark(theme === 'dark');
  };

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  useEffect(() => {
    if (typeof document === 'undefined') return;

    setIsDark(document.documentElement.dataset.theme === 'dark');
    setIsClient(true);

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.dataset.theme === 'dark');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return { isDark, toggleTheme, setTheme, isClient };
};
