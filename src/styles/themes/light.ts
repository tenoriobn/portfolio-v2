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
    'grey-800-75%': 'rgba(219, 219, 219, 0.75)',
    'grey-900': 'rgb(212, 212, 212)',
  },
};
