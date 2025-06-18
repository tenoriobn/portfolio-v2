import { Items } from './Navbar/navbar.type';

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
      href: string;
      icon: {
        url: string;
      };
    }[];
  };
  themeOptions: {
    title: string;
    theme: {
      id: string;
      linkName: string;
      icon: {
        url: string;
      };
    }[];
  };
  resumeLabel: {
    linkName: string;
    href: string;
  };
}