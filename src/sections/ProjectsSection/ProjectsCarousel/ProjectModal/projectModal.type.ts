import { ProjectItem } from '../../projects.type';

export type ModalType = 'info' | 'gallery';

export interface projectModal {
  project: ProjectItem
  type: ModalType;
}