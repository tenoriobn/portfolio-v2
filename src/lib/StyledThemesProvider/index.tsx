import { GlobalStyles} from 'src/styles';
import { ThemeProvider } from 'styled-components';
import { useThemeProvider } from './useThemeWrapper';

export function StyledThemeProvider({ children }: {children: React.ReactNode;}) {
  const { currentTheme, mounted } = useThemeProvider();
  if (!mounted) return null;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
