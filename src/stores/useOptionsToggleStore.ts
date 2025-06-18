import { create } from 'zustand';

export type ActiveOption = 'main' | 'language' | 'theme' | null;

interface OptionsToggleStore {
  activeOption: ActiveOption;
  setActiveOption: (value: ActiveOption) => void;
}

export const useOptionsToggleStore = create<OptionsToggleStore>((set) => ({
  activeOption: null,
  setActiveOption: (value) => set({ activeOption: value }),
}));
