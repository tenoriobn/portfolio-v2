import { useTheme } from 'next-themes';

export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  return { isDark, toggleTheme };
};
