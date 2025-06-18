import { ActiveOption } from '../../optionsToggle.type';

export interface ThemeProps {
  themes: { 
    id: string; 
    linkName: string; 
    icon: { 
      url: string; 
    } 
  }[];
  activeOption: ActiveOption;
  setActiveOption: React.Dispatch<React.SetStateAction<ActiveOption>>;
}