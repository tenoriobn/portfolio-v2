import React, { createContext, useContext } from 'react';
import { CMSProviderProps, CMSContextValue } from 'src/types/cms.type';

const CMSContext = createContext<CMSContextValue | undefined>(undefined);

export function CMSProvider({ children, cmsData, locale }: CMSProviderProps) {
  return (
    <CMSContext.Provider value={{ cmsData, locale }}>
      {children}
    </CMSContext.Provider>
  );
}

export function useCMSContext() {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMSContext must be used within a CMSProvider');
  }
  return context;
}