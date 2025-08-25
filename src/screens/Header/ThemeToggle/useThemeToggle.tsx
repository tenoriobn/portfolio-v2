import { useSyncExternalStore } from 'react';

function getTheme(): 'dark' | 'light' {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function subscribe(callback: () => void) {
  if (typeof document === 'undefined') return () => {};
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

function updateThemeMetaTags(theme: 'dark' | 'light') {
  const themeColor = theme === 'dark' ? 'rgb(47, 47, 47)' : 'rgb(212, 212, 212)';
  const selectors = [
    'meta[name="theme-color"]',
    'meta[name="msapplication-TileColor"]',
    'meta[name="msapplication-navbutton-color"]',
  ];
  selectors.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) element.setAttribute('content', themeColor);
  });
}

export const useThemeToggle = () => {
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'dark');
  const isDark = theme === 'dark';

  const setTheme = (next: 'dark' | 'light') => {
    document.cookie = `theme=${next}; path=/; max-age=31536000`;
    document.documentElement.setAttribute('data-theme', next);
    updateThemeMetaTags(next);
  };

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  return { theme, isDark, toggleTheme, setTheme };
};
