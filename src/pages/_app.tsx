import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme} from 'src/styles';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function App({ Component, pageProps, router }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const isDark = true;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Component {...pageProps} key={router.route} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
