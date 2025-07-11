import styled from 'styled-components';
import { borderInsetMixin, borderRaisedMixin, shadowSM } from '../mixins';

export const BorderInset = styled.div`
  border-radius: var(--radius-md);
  ${borderInsetMixin};
  ${shadowSM}
`;


export const BorderRaised = styled.div`
  border-radius: var(--radius-md);
  ${borderRaisedMixin};
  ${shadowSM}
`;

export const BorderButton = styled(BorderInset)`
  &:active {
    background: var(--gradient-grey-light-dark-reserve);
  }
`;

export const LargeBorderButton = styled.div<{ $isSelected?: boolean }>`
  ${({ $isSelected }) => ($isSelected ? borderRaisedMixin : borderInsetMixin)};
  ${shadowSM};
  border-radius: var(--radius-full);
  width: 100%;

  &:active {
    background: var(--gradient-grey-light-dark-reserve);
  }
`;
