import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme} from 'src/styles';

export default function App({ Component, pageProps }: AppProps) {
  const isDark = true;

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
