import { css } from 'styled-components';

export const textGradient = css`
  background: ${({ theme }) => theme.gradient['grey-gradient-text']};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;
