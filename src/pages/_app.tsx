import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme} from 'src/styles';

export default function App({ Component, pageProps }: AppProps) {
  const isDark = false;
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
