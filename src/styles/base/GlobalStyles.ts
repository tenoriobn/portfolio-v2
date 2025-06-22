import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
    background-color: ${({ theme }) => theme.colors['grey-900']};
    color:${({ theme }) => theme.colors['grey-300']};
    font-family: ${({ theme }) => theme.font.inter};
    font-size: 16px;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
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
