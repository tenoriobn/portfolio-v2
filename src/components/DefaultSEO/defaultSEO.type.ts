export interface SEORecordProps {
  seo: SEORecord
}

export interface SEORecord {
  id: string;
  componentName: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
  websiteUrl: string;
  keywords: string;
  author: string;
  siteName: string;
  favicon: {
    url: string;
  };
}

