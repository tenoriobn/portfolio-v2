import { ProjectItem } from '../../projects.type';

export type ModalType = 'info' | 'gallery';

export interface projectModal {
  project: ProjectItem
  type: ModalType;
}

interface CardPosition {
  x: number;
  y: number;
  width: number;
  height: number;
};

export interface ProjectModalState extends projectModal {
  cardPosition?: CardPosition | null;
};