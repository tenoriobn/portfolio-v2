import styled from 'styled-components';
import { borderInsetMixin, shadowSM, Wrapper } from 'src/styles';
import { useEffect, useRef } from 'react';
import { useClickOutside } from 'src/hook';
import { BaseModalProps } from './baseModal.type';

const StyledBaseModal = {
  Overlay: styled.div<{ $isGalleryModal?: boolean }>`
    background-color: rgba(0, 0, 0, 0.10);
    backdrop-filter: blur(16px);
    position: fixed;
    top: 0;
    left: 0;
    display: ${({ $isGalleryModal: $isGalleryModal }) => $isGalleryModal ? 'flex': 'grid'};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${({ $isGalleryModal: $isGalleryModal }) => $isGalleryModal ? '100dvh' : '100%'};
    z-index: 99999;
    padding: 1.5rem 1rem;
    overflow: hidden auto;

    @media (min-width: 768px) {
      padding: 64px 1.5rem;
    }
  `,

  Container: styled.div<{ $maxWidth?: string; $isGalleryModal?: boolean }>`
    ${borderInsetMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.md};
    width: 100%;
    height: ${({ $isGalleryModal: $isGalleryModal }) => $isGalleryModal ? '100%' : 'auto'};
    max-width: ${({ $maxWidth }) => $maxWidth || '1200px'};
  `,

  Content: styled.div<{ $isGalleryModal?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: ${({ $isGalleryModal: $isGalleryModal }) => $isGalleryModal ? '100%' : 'auto'};
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    overflow: hidden;
    padding: 1rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
      padding: 1.5rem;
    }
  `,
};

export default function BaseModal({ children, isOpen, onClose, maxWidth, isGalleryModal = false }: BaseModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, onClose);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Wrapper>
      <StyledBaseModal.Overlay $isGalleryModal={isGalleryModal}>
        <StyledBaseModal.Container 
          ref={modalRef} 
          $maxWidth={maxWidth}
          $isGalleryModal={isGalleryModal}
        >
          <StyledBaseModal.Content $isGalleryModal={isGalleryModal}>
            {children}
          </StyledBaseModal.Content>
        </StyledBaseModal.Container>
      </StyledBaseModal.Overlay>
    </Wrapper>
  );
}