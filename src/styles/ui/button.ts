import { motion } from 'motion/react';
import styled from 'styled-components';
import { BorderButton } from './border';

export const BaseButton = styled(motion.button)`
  display: grid;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors['grey-800-75%']};
`;

export const CircularButton = styled(BaseButton)`
  color: ${({ theme }) => theme.colors['grey-300']};
  place-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  width: 46px;
  height: 46px;
  padding: .375rem;
`;

export const LargeBorderButton = styled(BorderButton)`
  width: 100%;
`;

export const OptionButton = styled(BaseButton)`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  gap: .5rem;
  color: ${({ theme }) => theme.colors['grey-500']};
  text-align: left;
  padding: .75rem 1.5rem;
  width: 100%;
  position: relative;
`;
