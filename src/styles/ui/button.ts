import { motion } from 'motion/react';
import styled from 'styled-components';

export const BaseButton = styled(motion.button)`
  display: grid;
  border-radius: var(--radius-full);
  background-color: var(--color-grey-800-75);
`;

export const CircularButton = styled(BaseButton)`
  color: var(--color-grey-300);
  place-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  width: 46px;
  height: 46px;
  padding: .375rem;
`;

export const OptionButton = styled(BaseButton)`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  gap: .5rem;
  color: var(--color-grey-500);
  text-align: left;
  padding: .75rem 1rem;
  width: 100%;
  position: relative;
  height: 50px;

  @media (min-width: 768px) {
    padding: .75rem 1.5rem;
  }
`;
