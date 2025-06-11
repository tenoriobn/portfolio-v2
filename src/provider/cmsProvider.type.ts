import { ReactNode } from 'react';
import { LandingPage } from 'src/types/cmsContent.type';

export interface CMSContextType {
  cmsContent: LandingPage;
  year: number;
}

export interface CMSProviderProps extends CMSContextType {
  children: ReactNode;
}
