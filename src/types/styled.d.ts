import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark';
    colors: {
      black: string;
      white: string;
      'grey-200': string;
      'grey-300': string;
      'grey-500': string;
      'grey-800-75%': string;
      'grey-900': string;
    };
    font: {
      inter: string;
    }
  }
}
