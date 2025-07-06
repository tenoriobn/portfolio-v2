import type { AppProps } from 'next/app';
import { AppProviders } from 'src/lib';
import 'src/lib/atom/recoil';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AppProviders dehydratedState={pageProps.dehydratedState}>
      <Component {...pageProps} key={router.route} />
    </AppProviders>
  );
}
