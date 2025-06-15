import { DefaultTheme } from 'styled-components';
import { base } from './default';

export const darkTheme: DefaultTheme = {
  name: 'dark',
  ...base,
  colors: {
    black: 'rgb(255, 255, 255)',
    white: 'rgb(0, 0, 0)',
    'grey-200': 'rgb(222, 222, 222)',
    'grey-300': 'rgb(195, 196, 200)',
    'grey-500': 'rgb(134, 135, 139)',
    'grey-800-75%': 'rgba(51, 51, 51, 1)',
    'grey-900': 'rgb(47, 47, 47)',
  },
  gradient: {
    'grey-light-dark': 'linear-gradient(-43deg, rgba(38, 38, 38, 1) 20%, rgba(204, 204, 204, .3) 100%)',
    'grey-light-dark-reserve': 'linear-gradient(-43deg, rgba(207, 207, 207, .15) 0%, rgba(38, 38, 38, .8) 75%)',
    'grey-dark-light-dark-reserve': 'linear-gradient(-43deg,rgba(87, 87, 87, 1) 0%, rgba(207, 207, 207, 1) 17%, rgba(87, 87, 87, 1) 100%);'
  },
  shadow: {
    sm: '8px 8px 36px 0px rgba(0,0,0,0.12)',
  }
};
