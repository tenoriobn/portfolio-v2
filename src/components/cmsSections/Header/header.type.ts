import { Items } from './Navbar/navbar.type';
import { OptionsContent } from './OptionsToggle/OptionsPanel/optionsPanel.type';
export interface HeaderBlockRecord extends HeaderProps {
  id: string;
  componentName: string;
}
export interface HeaderProps extends OptionsContent {
  menu: {
    items: Items[];
  };
}