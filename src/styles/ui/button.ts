import { motion } from 'motion/react';
import styled from 'styled-components';

export const Button = styled(motion.button)`
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.full};

  background-color: ${({ theme }) => theme.colors['grey-800-75%']};
  color: ${({ theme }) => theme.colors['grey-300']};
  font-size: 1.25rem;
  font-weight: 700;
  width: 46px;
  height: 46px;
  padding: .375rem;
`;
