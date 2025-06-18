import { HeaderProps } from 'src/components/cmsSections/Header/header.type';
import { create } from 'zustand';

export interface HeaderStore extends HeaderProps {
  setHeaderData: (data: Partial<Omit<HeaderStore, 'setHeaderData'>>) => void;
}

export const useHeaderStore = create<HeaderStore>((set) => ({
  menu: { items: [] },
  language: { title: '', options: [] },
  themeOptions: { title: '', theme: [] },
  resumeLabel: { linkName: '', href: '' },
  setHeaderData: (data) => set((state) => ({ ...state, ...data }))
}));
