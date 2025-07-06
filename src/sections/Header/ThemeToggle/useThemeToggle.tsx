import { useTheme } from 'next-themes';

export const useThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = isDark ? 'light' : 'dark';

    if (newTheme === 'light') {
      document.body.classList.add('light-delayed');
      setTimeout(() => {
        document.body.classList.remove('light-delayed');
      }, 2000);
    }

    
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    document.body.style.setProperty('--bubble-left', `${centerX}px`);
    document.body.style.setProperty('--bubble-top', `${centerY}px`);

    const darkModeToggleEvent = new CustomEvent('darkModeToggle', {
      detail: { x: centerX, y: centerY, isDark: newTheme === 'dark' },
    });
    window.dispatchEvent(darkModeToggleEvent);

    setTimeout(() => {
      setTheme(newTheme);
    }, 100);
  };

  return { 
    isDark, 
    theme, 
    setTheme, 
    resolvedTheme, 
    toggleTheme 
  };
};