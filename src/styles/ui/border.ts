import styled from 'styled-components';
import { borderInsetMixin, borderRaisedMixin, shadowSM } from '../mixins';

export const BorderInset = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  ${borderInsetMixin};
  ${shadowSM}
`;


export const BorderRaised = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  ${borderRaisedMixin};
  ${shadowSM}
`;

export const BorderButton = styled(BorderInset)`
  &:active {
    background: ${({ theme }) => theme.gradient['grey-light-dark-reserve']};
  }
`;

export const LargeBorderButton = styled.div<{ $isSelected?: boolean }>`
  ${({ $isSelected }) => ($isSelected ? borderRaisedMixin : borderInsetMixin)};
  ${shadowSM};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: 100%;

  &:active {
    background: ${({ theme }) => theme.gradient['grey-light-dark-reserve']};
  }
`;
