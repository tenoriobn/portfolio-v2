import Head from 'next/head';
import { SEORecordProps } from './defaultSEO.type';

export default function DefaultSEO({ seo }: SEORecordProps) {
  const { title, description, image, websiteUrl, keywords, author, siteName } = seo;

  return (
    <Head>


      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={websiteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.url} />
      <meta name="twitter:site" content={websiteUrl} />
      <meta name="twitter:creator" content={websiteUrl} />
















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