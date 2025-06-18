import { Theme } from '../ThemeToggle/themeToggle.type';

export interface OptionsToggleProps {
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
    theme: Theme[];
  };
  resumeLabel: {
    linkName: string;
    href: string;
  };
}

export type ActiveOption = 'main' | 'language' | 'theme' | null;