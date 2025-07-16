import { AnimatePresence } from 'motion/react';
import { BorderButton, CircularButton } from 'src/styles';
import useOptionsToggle from './useOptionsToggle';
import OptionsList from './OptionsList';
import Language from './Language';
import Theme from './Theme';
import { useRef } from 'react';
import { useClickOutside } from 'src/hooks';

export default function OptionsPanel() {
  const { isActiveOption, setActiveOption, toggleOptions } = useOptionsToggle();
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setActiveOption(null));
  
  return (
    <div ref={dropdownRef}>
      <BorderButton onClick={toggleOptions} >
        <CircularButton>B</CircularButton>
      </BorderButton>

      <AnimatePresence mode="wait" initial={false}>   
        {isActiveOption === 'main' && <OptionsList />}
        {isActiveOption === 'language' && <Language />}
        {isActiveOption === 'theme' && <Theme />}
      </AnimatePresence>
    </div>
  );
}
