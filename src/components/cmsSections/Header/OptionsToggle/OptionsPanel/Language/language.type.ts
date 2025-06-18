import { ActiveOption } from '../../optionsToggle.type';

export interface LanguageProps {
  languages: { 
    id: string; 
    linkName: string; 
    href: string;
    icon: { 
      url: string; 
    } 
  }[];
  activeOption: ActiveOption;
  setActiveOption: React.Dispatch<React.SetStateAction<ActiveOption>>;
}