import React, { createContext, useContext, ReactNode } from 'react';
import { PageContentBlock } from 'src/screens/cmsSections.type';

interface CMSData {
  landingPage: {
    pageContent: PageContentBlock[];
  };
}

interface CMSContextType {
  data: CMSData;
  locale: string;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

interface CMSProviderProps {
  children: ReactNode;
  data: CMSData;
  locale: string;
}

export function CMSProvider({ children, data, locale }: CMSProviderProps) {
  return (
    <CMSContext.Provider value={{ data, locale }}>
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