import { useTheme } from 'next-themes';

export const useThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = theme === 'dark';

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  return { isDark, setTheme, resolvedTheme, toggleTheme };
};
