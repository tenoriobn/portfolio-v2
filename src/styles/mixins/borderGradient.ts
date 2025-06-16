import { css } from 'styled-components';

export const borderBase = css`
  position: relative;
  width: max-content;
  height: max-content;
  padding: 0.0625rem;
`;

export const insetBorder = css`
  ${borderBase};
  background: ${({ theme }) => theme.gradient['grey-light-dark']};
`;

export const raisedBorder = css`
  ${borderBase};
  background: ${({ theme }) => theme.gradient['grey-light-dark-reserve']};
`;
