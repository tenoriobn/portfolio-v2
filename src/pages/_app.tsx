import type { AppProps } from 'next/app';
import DefaultSEO from 'src/components/DefaultSEO';
import 'src/lib/atom/recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSEO />
      <Component {...pageProps} />
    </>
    // <AppProviders dehydratedState={pageProps.dehydratedState}>
    // </AppProviders>
  );
}
