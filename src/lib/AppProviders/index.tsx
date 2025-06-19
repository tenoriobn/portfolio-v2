import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { darkTheme, GlobalStyles, lightTheme } from 'src/styles';
import { ThemeProvider } from 'styled-components';
import { AppProvidersProps } from './appProviders.type';

export function AppProviders({ children, dehydratedState }: AppProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());
  const isDark = true;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <RecoilRoot>
          <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}
