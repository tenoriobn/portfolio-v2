import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { AppProvidersProps } from './appProviders.type';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { StyledThemeProvider } from '../StyledThemesProvider';

export function AppProviders({ children, dehydratedState }: AppProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <RecoilRoot>
          <NextThemesProvider attribute="data-theme" defaultTheme="dark"  storageKey="theme-preference">
            <StyledThemeProvider>
              {children}
            </StyledThemeProvider>
          </NextThemesProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}
