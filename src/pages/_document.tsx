import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const setInitialTheme = `
(function() {
  try {
    const cookieTheme = document.cookie.split('; ').find(t => t.startsWith('theme='));
    const value = cookieTheme ? cookieTheme.split('=')[1] : 'dark';
    const themeColor = value === 'dark' ? 'rgb(47, 47, 47)' : 'rgb(212, 212, 212)';
    
    document.documentElement.setAttribute('data-theme', value);
    window.__theme = value;
    
    var metas = [
      { name: "theme-color", content: themeColor },
      { name: "msapplication-TileColor", content: themeColor },
      { name: "msapplication-navbutton-color", content: themeColor },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" }
    ];
    metas.forEach(function(m) {
      var el = document.querySelector('meta[name="' + m.name + '"]');
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', m.name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', m.content);
    });
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.__theme = 'dark';
  }
})();
`;

export default class MyDocument extends Document<{ theme: 'dark' | 'light' }> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

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

    return (
      <Html lang="pt_BR" data-theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <meta name="theme-color" content="" />
          <meta name="msapplication-TileColor" content="" />
          <meta name="msapplication-navbutton-color" content="" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}