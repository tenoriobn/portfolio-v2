import { useRecoilState } from 'recoil';
import { projectModalState } from 'src/lib';
import { ProjectItem } from '../../projects.type';
import { ModalType } from './projectModal.type';

export const useProjectModal = () => {
  const [modalState, setModalState] = useRecoilState(projectModalState);
  
  const openModal = (project: ProjectItem, type: ModalType = 'info', cardElement?: HTMLDivElement | null) => {
    let cardPosition = null;
    
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect();

      cardPosition = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        width: rect.width,
        height: rect.height
      };
    }
    
    setModalState({ project, type, cardPosition });
  };

  const closeModal = () => { setModalState(null);};

  const isOpen = Boolean(modalState);
  const currentProject = modalState?.project || null;
  const currentType = modalState?.type || 'info';
  const cardPosition = modalState?.cardPosition || null;

  return {
    currentProject,
    currentType,
    isOpen,
    openModal,
    closeModal,
    cardPosition,
  };
};