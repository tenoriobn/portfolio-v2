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
    'grey-light-dark': 'linear-gradient(-43deg, rgb(20 20 20 / 15%) 20%, rgb(255 255 255) 80%)',
    'grey-light-dark-reserve': 'linear-gradient(-43deg, rgb(255 255 255) 20%, rgb(20 20 20 / 24%) 75%)',
    'grey-dark-light-dark-reserve': 'linear-gradient(-43deg,rgba(31, 31, 31, 1) 0%, rgba(208, 208, 208, 1) 17%, rgba(31, 31, 31, 1) 100%)'
  },
  shadow: {
    sm: '8px 8px 36px 0px rgba(0,0,0,0.32)',
  }
};
