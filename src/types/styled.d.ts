import 'styled-components';
import { ThemeType } from '../styles/base/Theme';

declare module 'styled-components' {
  export type DefaultTheme = ThemeType
}
