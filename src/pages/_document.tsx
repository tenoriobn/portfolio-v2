// pages/_document.tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const setInitialTheme = `
(function() {
  try {
    const cookieTheme = document.cookie.split('; ').find(t => t.startsWith('theme='));
    const value = cookieTheme ? cookieTheme.split('=')[1] : 'dark';
    document.documentElement.setAttribute('data-theme', value);
    window.__theme = value;
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.__theme = 'dark';
  }
})();
`;

export default class MyDocument extends Document<{ theme: 'dark' | 'light' }> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
