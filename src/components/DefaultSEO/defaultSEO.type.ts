export interface SeoRecord extends SEOProps {
  id: string;
  componentName: string;
}

export interface SEOProps {
  title: string;
  description: string;
  image: {
    url: string;
  }
  websiteUrl: string;
  keywords: string;
  author: string;
  siteName: string;
  favicon: {
    url: string;
  }
}