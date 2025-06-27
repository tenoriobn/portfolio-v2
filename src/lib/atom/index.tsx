import { atom } from 'recoil';
import { projectModal } from 'src/sections/ProjectsSection/ProjectsCarousel/ProjectModal/projectModal.type';

export const isMenuActiveState = atom({
  key: 'isMenuActive',
  default: false,
});

export const isActiveOptionState = atom<'main' | 'language' | 'theme' | null>({
  key: 'isActiveOption',
  default: null,
});

export const isActiveContactState = atom<string | null>({
  key: 'isActiveContactState',
  default: null,
});

export const projectModalState = atom<projectModal | null>({
  key: 'projectModal',
  default: null,
});