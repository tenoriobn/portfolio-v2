import { useProjectModal } from './useProjectModal';
import ProjectGalleryModal from './ProjectGalleryModal';
import ProjectInfoModal from './ProjectInfoModal';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import { useClickOutside } from 'src/hooks';
import { useBodyScrollLock } from 'src/hooks';
import { useRef } from 'react';
import styled from 'styled-components';
import { borderInsetMixin, shadowSM } from 'src/styles';
import { AnimatePresence, motion } from 'motion/react';
import { scaleFromPosition, overlayFade } from 'src/utils';

const Styled = {
  Overlay: styled(motion.div)<{ $isGalleryModal?: boolean }>`
    background-color: rgba(0, 0, 0, 0.10);
    backdrop-filter: blur(16px);
    position: fixed;
    top: 0;
    left: 0;
    display: ${({ $isGalleryModal }) => $isGalleryModal ? 'flex': 'grid'};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${({ $isGalleryModal }) => $isGalleryModal ? '100dvh' : '100%'};
    z-index: 99999;
    padding: 1.5rem 1rem;

    @media (min-width: 768px) {
      padding: 4rem 1.5rem;
    }
  `,

  Wrapper: styled(motion.div)<{ $maxWidth?: string; $isGalleryModal?: boolean }>`
    ${borderInsetMixin}
    ${shadowSM}
    border-radius: var(--radius-md);
    width: 100%;
    height: ${({ $isGalleryModal }) => $isGalleryModal ? '100%' : 'auto'};
    max-height: ${({ $isGalleryModal }) => $isGalleryModal ? '702px' : ''};
    max-width: ${({ $isGalleryModal }) => $isGalleryModal ? '1200px' : '668px'};
  `,

  Content: styled.div<{ $isGalleryModal?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: ${({ $isGalleryModal }) => $isGalleryModal ? '100%' : 'auto'};
    background-color: var(--color-grey-800-75);
    border-radius: var(--radius-md);
    overflow: hidden;
    padding: 1rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
      padding: 1.5rem;
    }
  `,
};

export default function ProjectModal() {
  const { isOpen, closeModal, currentProject, currentType, cardPosition } = useProjectModal();
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, closeModal);
  useBodyScrollLock(isOpen);
  
  const isGalleryModal = currentType === 'gallery';

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isOpen && currentProject && (
        <Styled.Overlay 
          key="project-modal-overlay"
          $isGalleryModal={isGalleryModal}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={overlayFade}
        >
          <Styled.Wrapper 
            ref={modalRef} 
            $isGalleryModal={isGalleryModal}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={scaleFromPosition}
            custom={cardPosition}
          >
            <Styled.Content $isGalleryModal={isGalleryModal}>
              <ModalHeader title={currentProject.projectTitle} onClose={closeModal} />

              {isGalleryModal && <ProjectGalleryModal project={currentProject} /> }
              {!isGalleryModal && <ProjectInfoModal project={currentProject} /> }

              <ModalFooter projectLinks={currentProject.projectLinks} />
            </Styled.Content>
          </Styled.Wrapper>
        </Styled.Overlay>
      )}
    </AnimatePresence>
  );
}