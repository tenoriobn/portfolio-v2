import styled from 'styled-components';
import { pulse } from '../animations';

export const SkeletonBase = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-grey-600);
  animation: ${pulse} 1.5s ease-in-out infinite;

  svg {
    color: var(--color-grey-500);
  }
`;