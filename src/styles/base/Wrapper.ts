import { motion } from 'motion/react';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1440px) {
    padding: 0;
  }
`;

export const Section = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  padding-bottom: 7.5rem;
  gap: .5rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

