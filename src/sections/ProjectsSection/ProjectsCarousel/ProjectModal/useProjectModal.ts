import { useRecoilState } from 'recoil';
import { projectModalState } from 'src/lib';
import { ProjectItem } from '../../projects.type';
import { ModalType } from './projectModal.type';

export const useProjectModal = () => {
  const [modalState, setModalState] = useRecoilState(projectModalState);
  const openModal = (project: ProjectItem, type: ModalType = 'info') => {
    setModalState({ project, type });
  };

  const closeModal = () => {
    setModalState(null);
  };

  const isOpen = Boolean(modalState);
  const currentProject = modalState?.project || null;
  const currentType = modalState?.type || 'info';

  return {
    currentProject,
    currentType,
    isOpen,
    openModal,
    closeModal,
  };
};