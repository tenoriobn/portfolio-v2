import { Items } from './Navbar/navbar.type';
import { Theme } from './ThemeToggle/themeToggle.type';

export interface HeaderBlockRecord extends HeaderProps {
  id: string;
  componentName: string;
}

export interface HeaderProps {
  menu: {
    items: Items[];
  };
  language: {
    title: string;
    options: {
      id: string;
      linkName: string;
      icon: {
        url: string;
      };
    }[];
  };
  themeOptions: {
    title: string;
    theme: Theme[];
  };
  resumeLabel: {
    linkName: string;
    href: string;
  };
}