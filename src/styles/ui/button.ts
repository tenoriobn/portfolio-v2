import { motion } from 'motion/react';
import styled from 'styled-components';

export const BaseButton = styled(motion.button)`
  display: grid;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors['grey-800-75%']};
`;

export const ControlButton = styled(BaseButton)`
  color: ${({ theme }) => theme.colors['grey-300']};
  place-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  width: 46px;
  height: 46px;
  padding: .375rem;
`;
