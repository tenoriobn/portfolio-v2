import { atom } from 'recoil';
import { ProjectItem } from 'src/sections/ProjectsSection/projects.type';
import { ModalType, } from 'src/sections/ProjectsSection/ProjectsCarousel/ProjectModal/projectModal.type';

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

type CardPosition = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type ProjectModalState = {
  project: ProjectItem;
  type: ModalType;
  cardPosition?: CardPosition | null;
};

export const projectModalState = atom<ProjectModalState | null>({
  key: 'projectModal',
  default: null,
});