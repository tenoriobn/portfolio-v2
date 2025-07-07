import Head from 'next/head';

export default function DefaultSEO() {

  const title = 'Bruno Tenório – Desenvolvedor Front-end | React, Vue e Next.js';
  const description = 'Portfólio de Bruno Tenório, desenvolvedor front-end especializado em interfaces modernas, acessíveis e funcionais com foco em experiência do usuário.';
  const keywords = 'Bruno Tenório, Desenvolvedor Front-End, React, Vue, Next.js, JavaScript, TypeScript, UI/UX, Portfólio Web, Interfaces Modernas, Programador Front-End';
  const author = 'Bruno Tenório';
  const websiteUrl = 'https://tenoriobn-portfolio.vercel.app/';
  const siteName = 'Bruno Tenório - Portfólio';
  const imageUrl = 'https://www.datocms-assets.com/162009/1749579148-perfil.jpg';
  const faviconUrl = 'https://www.datocms-assets.com/162009/1751805384-favicon.svg';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={websiteUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content={websiteUrl} />
      <meta name="twitter:creator" content={websiteUrl} />

      {/* Favicon */}
      <link rel="icon" href={faviconUrl} type="image/svg" sizes="32x32" />
      <link rel="apple-touch-icon" href={faviconUrl} />

      {/* Theme */}
      {/* <meta name="theme-color" content={theme.colors['grey-900']} />
      <meta name="msapplication-TileColor" content={theme.colors['grey-900']} />
      <meta name="msapplication-navbutton-color" content={theme.colors['grey-900']} /> */}
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Head>
  );
}
