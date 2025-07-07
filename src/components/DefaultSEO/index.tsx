import Head from 'next/head';

export default function DefaultSEO() {

  return (
    <Head>
      <title>Bruno</title>
      <meta name="description" content='aqui uam descrição' />
      <meta name="keywords" content='tags aqui' />
      <meta name="author" content='Bruno' />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href='https://tenoriobn-portfolio.vercel.app/' />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tenoriobn-portfolio.vercel.app/" />
      <meta property="og:title" content="Bruno Tenorio — Desenvolvedor Front-end" />
      <meta property="og:description" content="Portfólio de Bruno Tenorio, especialista em interfaces modernas e acessíveis." />
      <meta property="og:image" content="https://www.datocms-assets.com/157441/1746975121-eduardo-com-fundo.jpg?w=1200" />
      <meta property="og:site_name" content="Bruno Tenorio" />
      <meta property="og:locale" content="pt_BR" />
















      {/* <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={websiteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.url} />
      <meta property="og:site_name" content={siteName} />

      <link rel="icon" href={favicon.url} type="image/svg" sizes="32x32" />
      <link rel="apple-touch-icon" href={favicon.url} />

      <meta name="theme-color" content={theme.colors['grey-900']} />
      <meta name="msapplication-TileColor" content={theme.colors['grey-900']} />
      <meta name="msapplication-navbutton-color" content={theme.colors['grey-900']} />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> */}
    </Head>
  );
}