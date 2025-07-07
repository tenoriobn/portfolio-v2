import type { AppProps } from 'next/app';
import DefaultSEO from 'src/components/DefaultSEO';
import { AppProviders } from 'src/lib';
import 'src/lib/atom/recoil';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSEO />    
      <AppProviders dehydratedState={pageProps.dehydratedState}>
        <Component {...pageProps} key={router.route} />
      </AppProviders>
    </>
  );
}
