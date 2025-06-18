import { ButtonBorderDropdown, CloseIconDropdown, ListOptions, SmallButtonDropdown } from 'src/styles';
import { OptionListProps } from './optionList.type';

export default function OptionList({ onClose, children }: OptionListProps) {
  return (
    <ListOptions>
      <ButtonBorderDropdown onClick={onClose}>
        <SmallButtonDropdown><CloseIconDropdown /></SmallButtonDropdown>
      </ButtonBorderDropdown>

      {children}
    </ListOptions>
  );
}
