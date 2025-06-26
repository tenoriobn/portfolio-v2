import styled from 'styled-components';
import { borderInsetMixin, shadowSM, Wrapper } from 'src/styles';
import { useEffect, useRef } from 'react';
import { useClickOutside } from 'src/hook';
import { ModalWrapperProps } from './modalWrapper.type';

const StyledModalWrapper = {
  Modal: styled.div`
    background-color: rgba(0, 0, 0, 0.10);
    backdrop-filter: blur(16px);
    position: fixed;
    top: 0px;
    left: 0px;
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 99999;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    overflow: hidden auto;
  `,

  ModalContentWrapper: styled.div`
    ${borderInsetMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.md};
    width: 100%;
  `,

  ModalContent: styled.div<{$maxWidth?: string}>`
    display: grid;
    align-items: center;
    justify-content: center;
    max-width: ${({ $maxWidth }) => $maxWidth || '100%'};
    height: 100%;
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `,
};

export default function ModalWrapper({ children, isOpen, onClose, maxWidth }: ModalWrapperProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, () => onClose());

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  return (
    <StyledModalWrapper.Modal>
      <Wrapper>
        <StyledModalWrapper.ModalContentWrapper ref={modalRef}>
          <StyledModalWrapper.ModalContent $maxWidth={maxWidth}>
            {children}
          </StyledModalWrapper.ModalContent>
        </StyledModalWrapper.ModalContentWrapper>
      </Wrapper>
    </StyledModalWrapper.Modal>
  );
}