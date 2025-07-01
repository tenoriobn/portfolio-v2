import BaseModal from 'src/components/BaseModal';
import { useProjectModal } from './useProjectModal';
import ProjectGalleryModal from './ProjectGalleryModal';
import ProjectInfoModal from './ProjectInfoModal';
import ModalHeader from 'src/components/BaseModal/ModalHeader';
import ModalFooter from 'src/components/BaseModal/ModalFooter';

export default function ProjectModal() {
  const { isOpen, closeModal, currentProject, currentType } = useProjectModal();

  if (!currentProject) return null;

  const isGalleryModal = currentType === 'gallery';
  const maxWidth = isGalleryModal ? '1200px' : '668px';

  return (
    <BaseModal isOpen={isOpen} onClose={closeModal} maxWidth={maxWidth} isGalleryModal={isGalleryModal}>
      <ModalHeader title={currentProject.projectTitle} onClose={closeModal} />
      
      {isGalleryModal ? (
        <ProjectGalleryModal project={currentProject} />
      ) : (
        <ProjectInfoModal project={currentProject} />
      )}

      {currentProject.projectLinks && currentProject.projectLinks.length > 0 && (
        <ModalFooter projectLinks={currentProject.projectLinks} />
      )}
    </BaseModal>
  );
}