import { useSyncExternalStore } from 'react';

function getTheme(): 'dark' | 'light' {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function updateThemeMetaTags(theme: 'dark' | 'light') {
  const themeColor = theme === 'dark' ? 'rgb(47, 47, 47)' : 'rgb(212, 212, 212)';
  
  const metaSelectors = [
    'meta[name="theme-color"]',
    'meta[name="msapplication-TileColor"]',
    'meta[name="msapplication-navbutton-color"]'
  ];
  
  metaSelectors.forEach(selector => {
    const meta = document.querySelector(selector);
    if (meta) meta.setAttribute('content', themeColor);
  });
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
    updateThemeMetaTags(newTheme);
  };

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  return { theme, isDark, toggleTheme, setTheme };
};
