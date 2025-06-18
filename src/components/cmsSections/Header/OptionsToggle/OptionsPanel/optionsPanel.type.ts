import { Theme } from '../../ThemeToggle/themeToggle.type';
import { ActiveOption } from '../optionsToggle.type';

export interface OptionsPanelProps extends OptionsContent {
  activeOption: ActiveOption;
  setActiveOption: React.Dispatch<React.SetStateAction<ActiveOption>>;
}

export interface OptionsContent {
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