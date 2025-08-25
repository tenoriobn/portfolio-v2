import Head from 'next/head';
import { useCMSSection } from 'src/hooks';

export default function DefaultSEO() {
  const { title, description, image, websiteUrl, keywords, author, siteName, favicon } = useCMSSection('SeoRecord');
  
  return (
    <Head>
      <title>{title}</title>
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
    </Head>
  );
}