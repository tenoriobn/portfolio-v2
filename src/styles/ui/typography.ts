import styled from 'styled-components';
import { textGradient } from '../mixins';

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  ${textGradient}

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 632px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;