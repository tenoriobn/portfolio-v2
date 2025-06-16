import styled from 'styled-components';
import { insetBorder, raisedBorder, shadowSM } from '../mixins';

export const InsetBorder = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  ${insetBorder};
  ${shadowSM}
`;


export const RaisedBorder = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  ${raisedBorder};
  ${shadowSM}
`;

export const ButtonBorder = styled(InsetBorder)`
  &:active {
    background: ${({ theme }) => theme.gradient['grey-light-dark-reserve']};
  }
`;
