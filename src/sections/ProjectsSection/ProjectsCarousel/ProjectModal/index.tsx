import BaseModal from 'src/components/Modal/BaseModal';
import { useProjectModal } from './useProjectModal';
import ProjectGalleryModal from './ProjectGalleryModal';
import ProjectInfoModal from './ProjectInfoModal';
import ModalHeader from 'src/components/Modal/ModalHeader';

export default function ProjectModal() {
  const { isOpen, closeModal, currentProject, currentType } = useProjectModal();

  if (!currentProject) return null;

  const isGalleryModal = currentType === 'gallery';
  const maxWidth = isGalleryModal ? '1200px' : '668px';

  return (
    <BaseModal isOpen={isOpen} onClose={closeModal} maxWidth={maxWidth} fullHeight={isGalleryModal}>
      <ModalHeader title={currentProject.projectTitle} onClose={closeModal} />
      
      {isGalleryModal ? (
        <ProjectGalleryModal project={currentProject} />
      ) : (
        <ProjectInfoModal project={currentProject} />
      )}
    </BaseModal>
  );
}