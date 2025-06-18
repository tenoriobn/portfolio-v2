import { ButtonBorder, ControlButton } from 'src/styles';
import OptionsPanel from './OptionsPanel';
import { useOptionsToggleStore } from 'src/stores/useOptionsToggleStore';

export default function OptionsToggle() {
  const activeOption = useOptionsToggleStore((s) => s.activeOption);
  const setActiveOption = useOptionsToggleStore((s) => s.setActiveOption);

  return (
    <>
      <ButtonBorder onClick={() => setActiveOption(activeOption === null ? 'main' : null)}>
        <ControlButton>B</ControlButton>
      </ButtonBorder>

      <OptionsPanel />
    </>
  );
}
