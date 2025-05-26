import { ThemeType } from 'src/styles/Theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
