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
    'grey-light-dark': 'linear-gradient(to left top, rgb(27 27 27) 10%, rgb(204 204 204 / 34%) 100%)',
    'grey-light-dark-reserve': 'linear-gradient(to left top, rgb(204 204 204 / 24%) 10%, rgb(27 27 27) 90%)',
    'grey-dark-light-dark-reserve': 'linear-gradient(to left top, rgb(204 204 204 / 34%) 0%, rgb(27 27 27 / 34%) 17%, rgb(204 204 204 / 34%) 100%)',
    'grey-gradient-text': 'linear-gradient(to left top, rgba(134, 135, 139, 1) 0%, rgba(195, 196, 200, 1) 100%)',
  },
  shadow: {
    sm: '8px 8px 18px 0px rgba(0,0,0,0.12)',
  }
};
