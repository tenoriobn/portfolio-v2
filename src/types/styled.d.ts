/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ThemeType } from 'src/styles/theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
