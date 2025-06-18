import { ActiveOption } from '../../optionsToggle.type';

export interface ThemeProps {
  activeOption: ActiveOption;
  setActiveOption: React.Dispatch<React.SetStateAction<ActiveOption>>;
}