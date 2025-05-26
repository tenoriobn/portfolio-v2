import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
/* 1. Modelo de dimensionamento de caixa mais intuitivo */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove margens e padding padrão */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  /* 3. Configura largura e altura padrão */
  html, body, #root {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-family: 'Courier New', Courier, monospace;
    line-height: normal;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
    min-height: 100vh;

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.white};

    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.black};
      border-radius: .125rem;
    }
  }

  /* 4. Corrige a tipografia para herdar estilos */
  body {
    padding: 0 1rem;

    @media (min-width: 768px) {
      padding: 0 2rem;
    }

    @media (min-width: 1440px) {
      padding: 0;
    }
  }

  #root, #__next {
    isolation: isolate;
  }

  /* 5. Evita estouros de texto */
  h1, h2, h3, h4, h5, h6 {
    word-wrap: balance;
    all: unset;
  }

  /* 6. Melhora a quebra de linha */
  p {
    word-wrap: pretty;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 7. Remove decorações de links */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* 8. Remove marcadores de listas e ajusta preenchimento */
  ul, ol {
    list-style: none;
  }

  /* 9. Remove estilos padrões de botões */
  button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
  }

  /* 10. Configura imagens e elementos de mídia */
  img, picture, video, canvas {
    max-width: 100%;
    display: block;
  }

  /* 11. Previne estilos adicionais para input e textarea */
  input, textarea, select, button {
    font: inherit;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
    caret-color: ${({ theme }) => theme.colors.white} !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  /* 12. Configura elementos HTML5 para block por padrão */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  /* 13. Reseta tabelas */
  table {
    border-collapse: collapse;
    width: 100%;
  }

  /* 14. Define estilos padrão para formatação */
  strong {
    font-weight: bold;
  }

  code {
    font-family: 'Courier New', Courier, monospace;
  }
`;
