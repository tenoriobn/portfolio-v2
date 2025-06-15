import styled from 'styled-components';
import { shadowSM } from '../mixins';

export const InsetBorder = styled.div`
  background: ${({ theme }) => theme.gradient['grey-light-dark']};
  padding: .0625rem;
  border-radius: 1.5rem;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: max-content;
  height: max-content;

  ${shadowSM}

  &:active {
    background: ${({ theme }) => theme.gradient['grey-light-dark-reserve']};
  }
`;