import styled, { css } from 'styled-components';

export const transitionThemeAnimation = css`
  transition: background-color 0s;

  body.light-delayed & {
    transition: background-color 0s 2s;
  }
`;

export const OverflowAnimationAbsolute = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;


export const OverflowAnimationFixed = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  mask-image: radial-gradient(circle at center, black 100%, transparent 100%);
  -webkit-mask-image: radial-gradient(circle at center, black 100%, transparent 108%);
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;