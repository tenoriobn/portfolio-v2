import { motion } from 'motion/react';
import styled from 'styled-components';
import { insetBorder, shadowSM } from '../mixins';
import { BaseButton, ControlButton } from './button';
import { ButtonBorder } from './border';
import CloseIcon from 'public/icons/close.svg';
import ArrowRightIcon from 'public/icons/arrow-right.svg';

export const OptionsWrapper = styled(motion.div)<{$activeOption: string | null}>`
  display: ${({ $activeOption: $isMenuActive }) => $isMenuActive ? 'block' : 'none'};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  left: 12px;
  top: 90px;
  ${insetBorder}
  ${shadowSM}
  position: absolute;
  width: 256px;
`;

export const ListOptions = styled.div`
  display: grid;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors['grey-800-75%']};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: .75rem 1rem 1rem 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
    padding: .75rem 1.5rem 1.5rem 1.5rem;
  }
`;

export const SmallButtonDropdown = styled(ControlButton)`
  width: 32px;
  height: 32px;
`;

export const ButtonBorderDropdown = styled(ButtonBorder)`
  justify-self: end;
`;

export const CloseIconDropdown = styled(CloseIcon)`
  path {
    transform: scale(0.6);
    transform-origin: center;
    stroke-width: 3px;
  }
`;

export const ArrowLeftIcon = styled(ArrowRightIcon)`
  position: relative;
  right: 1px;
  
  path {
    transform: scaleX(-1) scale(0.8);
    transform-origin: center;
  }
`;

export const ButtonContainer = styled(ButtonBorder)`
  width: 100%;
`;

export const ButtonDropdown = styled(BaseButton)`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  gap: .5rem;
  color: ${({ theme }) => theme.colors['grey-500']};
  text-align: left;
  padding: .75rem 1.5rem;
  width: 100%;
  position: relative;
  height: 48px;
`;