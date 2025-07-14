import { atom } from 'recoil';
import { ProjectModalState, } from 'src/screens/ProjectsSection/ProjectsCarousel/ProjectModal/projectModal.type';

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

export const projectModalState = atom<ProjectModalState | null>({
  key: 'projectModal',
  default: null,
});