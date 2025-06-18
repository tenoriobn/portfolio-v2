import { css } from 'styled-components';

export const shadowSM = css`
  box-shadow: ${({ theme }) => theme.shadow.sm};
  -webkit-box-shadow: ${({ theme }) => theme.shadow.sm};
  -moz-box-shadow: ${({ theme }) => theme.shadow.sm};
`;
