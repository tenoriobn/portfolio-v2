import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from 'src/styles';

export const useThemeProvider = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = resolvedTheme === 'dark' ? darkTheme : lightTheme;

  return { currentTheme, mounted };
};