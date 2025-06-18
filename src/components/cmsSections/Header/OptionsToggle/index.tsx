import { useState } from 'react';
import { ButtonBorder, ControlButton } from 'src/styles';
import { ActiveOption } from './optionsToggle.type';
import OptionsPanel from './OptionsPanel';

export default function OptionsToggle() {
  const [activeOption, setActiveOption] = useState<ActiveOption>(null);
  
  return (
    <>
      <ButtonBorder onClick={() => setActiveOption(prev => (prev === null ? 'main' : null))}>
        <ControlButton>B</ControlButton>
      </ButtonBorder>

      <OptionsPanel
        activeOption={activeOption} 
        setActiveOption={setActiveOption}
      />
    </>
  );
}
