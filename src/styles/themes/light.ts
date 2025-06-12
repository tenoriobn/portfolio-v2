import { DefaultTheme } from 'styled-components';
import { base } from './default';

export const lightTheme: DefaultTheme = {
  name: 'light',
  ...base,
  colors: {
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)',
    'grey-200': 'rgb(222, 222, 222)',
    'grey-300': 'rgb(195, 196, 200)',
    'grey-500': 'rgb(134, 135, 139)',
    'grey-800-75%': 'rgba(51, 51, 51, 0.75)',
    'grey-900': 'rgb(47, 47, 47)',
  },
};
