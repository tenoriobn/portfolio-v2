import { ReactNode } from 'react';
import { PageContentBlock } from 'src/screens/cmsSections.type';

export type CMSData = {
  landingPage: {
    pageContent: PageContentBlock[];
  };
};
export interface CMSContextValue {
  cmsData: CMSData;
  locale: string;
}

export interface CMSProviderProps extends CMSContextValue {
  children: ReactNode;
}
