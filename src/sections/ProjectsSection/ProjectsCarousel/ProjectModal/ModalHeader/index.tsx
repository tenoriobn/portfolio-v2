import styled from 'styled-components';
import { BorderButton, CircularButton, textGradient } from 'src/styles';
import CloseIcon from 'public/icons/close.svg';
import PinIcon from 'public/icons/pin.svg';
import { ModalHeaderProps } from './modalHeader.type';

const StyledModalHeader = {
  Container: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
  `,

  Title: styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    ${textGradient}
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
  `,

  CloseButton: styled(CircularButton)`
    width: 32px;
    height: 32px;
  `,

  CloseIcon: styled(CloseIcon)`
    path {
      transform: scale(0.6);
      transform-origin: center;
      stroke-width: 3px;
    }
  `,
};

export default function ModalHeader({ title, onClose }: ModalHeaderProps) {
  return (
    <StyledModalHeader.Container>
      <StyledModalHeader.Title>
        <PinIcon aria-hidden="true" />
        {title}
      </StyledModalHeader.Title>

      <BorderButton>
        <StyledModalHeader.CloseButton 
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <StyledModalHeader.CloseIcon />
        </StyledModalHeader.CloseButton>
      </BorderButton>
    </StyledModalHeader.Container>
  );
}