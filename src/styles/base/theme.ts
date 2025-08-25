import { css } from 'styled-components';
import { inter } from './font';

export const Theme = css`
  :root {
    --font-inter: ${inter.style.fontFamily}, sans-serif;

    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;

    --radius-md: 24px;
    --radius-full: 10000px;

    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;

    --font-weight-normal: 400;
    --font-weight-bold: 700;

    --transition-default: 0.5s ease-in-out;
  }

  [data-theme='dark'] {
    --color-black: rgb(255, 255, 255);
    --color-white: rgb(0, 0, 0);
    --color-grey-200: rgb(222, 222, 222);
    --color-grey-300: rgb(195, 196, 200);
    --color-grey-500: rgb(134, 135, 139);
    --color-grey-600: rgb(71 71 71);
    --color-grey-800-75: rgba(51, 51, 51, 1);
    --color-grey-900: rgb(47, 47, 47);
    --color-grey-700: rgb(255 255 255 / 20%);
    --gradient-grey-light-dark: linear-gradient(to left top, rgb(27 27 27) 10%, rgb(204 204 204 / 34%) 100%);
    --gradient-grey-light-dark-reserve: linear-gradient(to left top, rgb(204 204 204 / 24%) 10%, rgb(27 27 27) 90%);
    --gradient-grey-dark-light-dark-reserve: linear-gradient(to left top, rgb(204 204 204 / 34%) 0%, rgb(68 68 68 / 44%) 17%, rgb(204 204 204 / 34%) 100%);
    --gradient-grey-gradient-text: linear-gradient(to left top, rgba(134, 135, 139, 1) 0%, rgba(195, 196, 200, 1) 100%);
    --shadow-sm: 8px 8px 18px 0px rgba(0,0,0,0.12);
  }

  [data-theme='light'] {
    --color-black: rgb(0, 0, 0);
    --color-white: rgb(255, 255, 255);
    --color-grey-200: rgb(81, 81, 81);
    --color-grey-300: rgb(108, 108, 108);
    --color-grey-500: rgb(142, 142, 142);
    --color-grey-600: rgb(177 177 177);
    --color-grey-800-75: rgba(219, 219, 219, 1);
    --color-grey-900: rgb(212, 212, 212);
    --color-grey-700: rgb(62 62 62 / 50%);
    --gradient-grey-light-dark: linear-gradient(to left top, rgb(20 20 20 / 16%) 10%, rgb(255 255 255) 100%);
    --gradient-grey-light-dark-reserve: linear-gradient(to left top, rgb(255 255 255) 10%, rgb(20 20 20 / 16%) 90%);
    --gradient-grey-dark-light-dark-reserve: linear-gradient(to left top, rgb(255 255 255) 0%, rgb(20 20 20 / 16%) 17%, rgb(255 255 255) 100%);
    --gradient-grey-gradient-text: linear-gradient(to left top, rgba(145, 145, 145, 1) 0%, rgba(81, 81, 81, 1) 100%);
    --shadow-sm: 8px 8px 32px 0px rgba(0,0,0,0.06);
  }
`;
