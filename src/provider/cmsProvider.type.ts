import { ReactNode } from 'react';

export interface CMSContextType<T = unknown> {
  cmsContent: T;
  year: number;
}

export interface CMSProviderProps extends CMSContextType {
  children: ReactNode;
}
