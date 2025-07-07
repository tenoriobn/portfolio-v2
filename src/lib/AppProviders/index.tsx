import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { AppProvidersProps } from './appProviders.type';
import { GlobalStyles } from 'src/styles';

export function AppProviders({ children, dehydratedState }: AppProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <RecoilRoot>
          <GlobalStyles />
          {children}
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}
