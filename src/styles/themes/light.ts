import { DefaultTheme } from 'styled-components';
import { base } from './default';

export const lightTheme: DefaultTheme = {
  name: 'light',
  ...base,
  colors: {
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)',
    'grey-200': 'rgb(81, 81, 81)',
    'grey-300': 'rgb(108, 108, 108)',
    'grey-500': 'rgb(142, 142, 142)',
    'grey-800-75%': 'rgba(219, 219, 219, 1)',
    'grey-900': 'rgb(212, 212, 212)',
  },
  gradient: {
    'grey-light-dark': 'linear-gradient(to left top, rgb(20 20 20 / 16%) 10%, rgb(255 255 255) 100%)',
    'grey-light-dark-reserve': 'linear-gradient(to left top, rgb(255 255 255) 10%, rgb(20 20 20 / 16%) 90%)',
    'grey-dark-light-dark-reserve': 'linear-gradient(to left top, rgb(255 255 255) 0%, rgb(20 20 20 / 16%) 17%, rgb(255 255 255) 100%)',
    'grey-gradient-text': 'linear-gradient(to left top, rgba(145, 145, 145, 1) 0%, rgba(81, 81, 81, 1) 100%)',
  },
  shadow: {
    sm: '8px 8px 36px 0px rgba(0,0,0,0.16)',
  }
};
