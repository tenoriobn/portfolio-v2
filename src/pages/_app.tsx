import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import 'src/lib/atom/recoil';
import { GlobalStyles } from 'src/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
