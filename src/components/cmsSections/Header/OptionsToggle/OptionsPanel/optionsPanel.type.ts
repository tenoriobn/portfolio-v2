import { ActiveOption } from '../optionsToggle.type';

export interface OptionsPanelProps {
  activeOption: ActiveOption;
  setActiveOption: React.Dispatch<React.SetStateAction<ActiveOption>>;
}