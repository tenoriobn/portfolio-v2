import { AnimatePresence } from 'motion/react';
import { BorderButton, CircularButton, pulse } from 'src/styles';
import useOptionsToggle from './useOptionsToggle';
import OptionsList from './OptionsList';
import Language from './Language';
import Theme from './Theme';
import { useRef } from 'react';
import { useClickOutside } from 'src/hooks';
import styled, { css } from 'styled-components';

const StyledBorderButton = styled(BorderButton)<{ $disablePulse: boolean }>`
  ${({ $disablePulse }) => !$disablePulse && css`
    animation: ${pulse} 1.5s ease-in-out infinite;
    
    &:hover, &:active {
      animation: none;
    }
  `}
`;

export default function OptionsPanel() {
  const { isActiveOption, setActiveOption, toggleOptions, disablePulse } = useOptionsToggle();
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setActiveOption(null));
  
  return (
    <div ref={dropdownRef}>
      <StyledBorderButton onClick={toggleOptions} $disablePulse={disablePulse}>
        <CircularButton>B</CircularButton>
      </StyledBorderButton>

      <AnimatePresence mode="wait" initial={false}>   
        {isActiveOption === 'main' && <OptionsList />}
        {isActiveOption === 'language' && <Language />}
        {isActiveOption === 'theme' && <Theme />}
      </AnimatePresence>
    </div>
  );
}
