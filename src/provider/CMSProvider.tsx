import { createContext } from 'react';
import { CMSContextType, CMSProviderProps } from './cmsProvider.type';

export const CMSContext = createContext<CMSContextType | null>(null);

export default function CMSProvider({ children, cmsContent, year }: CMSProviderProps) {
  return (
    <CMSContext.Provider value={{ cmsContent, year }}>
      { children }
    </CMSContext.Provider>
  );
}