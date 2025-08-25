import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  ${Theme}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background-color: var(--color-grey-900);
    color: var(--color-grey-300);
    font-family: var(--font-inter);
    font-size: 16px;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

    &::-webkit-scrollbar {
      width: 10px;
      background: var(--color-grey-800-75);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-grey-500);
      border-radius: var(--radius-full); 
    }
  }

  #root, #__next {
    isolation: isolate;
  }

  h1, h2, h3, h4, h5, h6 {
    word-wrap: balance;
    all: unset;
  }

  p {
    word-wrap: pretty;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button, a { 
    outline: none;
    user-select: none;

    &:focus-visible {
      box-shadow: var(--color-grey-700);
    }
  }

  button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
  }

  img, picture, video, canvas {
    max-width: 100%;
    display: block;
  }

  button {
    font: inherit;
  }

  article, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  strong {
    font-weight: bold;
  }

  code {
    font-family: 'Courier New', Courier, monospace;
  }
`;
