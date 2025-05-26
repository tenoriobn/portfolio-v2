import type { AppProps } from "next/app";
import { GlobalStyles } from "src/styles/globalStyles";
import { Theme } from "src/styles/theme";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
