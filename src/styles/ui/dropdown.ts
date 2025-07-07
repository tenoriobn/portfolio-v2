import { motion } from 'motion/react';
import styled from 'styled-components';
import { borderInsetMixin, shadowSM } from '../mixins';

export const DropdownWrapper = styled(motion.div)`
  border-radius: var(--radius-md);
  ${borderInsetMixin}
  ${shadowSM}
  position: absolute;
`;

export const DropdownList = styled.div`
  display: grid;
  gap: 1rem;
  background-color: var(--color-grey-800-75);
  border-radius: var(--radius-md);

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;