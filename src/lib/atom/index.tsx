import { atom } from 'recoil';

export const isMenuActiveState = atom({
  key: 'isMenuActive',
  default: false,
});

export const isActiveOptionState = atom<'main' | 'language' | 'theme' | null>({
  key: 'isActiveOption',
  default: null,
});