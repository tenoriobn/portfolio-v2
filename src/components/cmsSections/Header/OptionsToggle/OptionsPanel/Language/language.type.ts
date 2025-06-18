import { ActiveOption } from '../../optionsToggle.type';

export interface LanguageProps {
  activeOption: ActiveOption;
  setActiveOption: React.Dispatch<React.SetStateAction<ActiveOption>>;
}