import { useSyncExternalStore } from 'react';

function getTheme(): 'dark' | 'light' {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function subscribe(callback: () => void) {
  const observer = new MutationObserver(() => callback());

  if (typeof document !== 'undefined') {
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
  }

  return () => observer.disconnect();
}

export const useThemeToggle = () => {
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'dark');
  const isDark = theme === 'dark';

  const setTheme = (newTheme: 'dark' | 'light') => {
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  return { theme, isDark, toggleTheme, setTheme };
};
