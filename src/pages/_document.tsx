import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const setInitialTheme = `
(function() {
  try {
    const cookieTheme = document.cookie.split('; ').find(t => t.startsWith('theme='));
    const value = cookieTheme ? cookieTheme.split('=')[1] : 'dark';
    
    // Forçar a atualização das meta tags ANTES de qualquer coisa
    const themeColor = value === 'dark' ? 'rgb(47, 47, 47)' : 'rgb(212, 212, 212)';
    
    // Atualizar meta tags primeiro
    const metaSelectors = [
      'meta[name="theme-color"]',
      'meta[name="msapplication-TileColor"]', 
      'meta[name="msapplication-navbutton-color"]'
    ];
    
    metaSelectors.forEach(function(selector) {
      const meta = document.querySelector(selector);
      if (meta) meta.setAttribute('content', themeColor);
    });
    
    // Depois atualizar o data-theme
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

    // Sempre usar dark como padrão no servidor para evitar mismatch
    // O cliente corrige imediatamente via script
    const theme: 'dark' | 'light' = 'dark';

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        theme,
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
    const { theme } = this.props;
    
    // Sempre usar dark no servidor - o cliente corrige
    const themeColor = 'rgb(47, 47, 47)';

    return (
      <Html lang="pt_BR" data-theme={theme}>
        <Head>
          <meta name="theme-color" content={themeColor} />
          <meta name="msapplication-TileColor" content={themeColor} />
          <meta name="msapplication-navbutton-color" content={themeColor} />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
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