import { AnimatePresence } from 'motion/react';
import { BorderButton, CircularButton, OverflowAnimationFixed, transitionThemeAnimation } from 'src/styles';
import useOptionsToggle from './useOptionsToggle';
import OptionsList from './OptionsList';
import Language from './Language';
import Theme from './Theme';
import { useRef } from 'react';
import { useClickOutside } from 'src/hook';
import DarkModeAnimate from 'src/components/DarkModeAnimate';
import styled from 'styled-components';

const Styled = {
  CircularButton: styled(CircularButton)`
    position: relative;
    z-index: 1;
    ${transitionThemeAnimation}
  `,

  Label: styled.span`
    position: relative;
    z-index: 1;
    transition: color ${({ theme }) => theme.transitions.default};
  `,
};

export default function OptionsPanel() {
  const { isActiveOption, setActiveOption, toggleOptions } = useOptionsToggle();
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setActiveOption(null));
  
  return (
    <div ref={dropdownRef}>
      <BorderButton onClick={toggleOptions} >
        <Styled.CircularButton>
          <OverflowAnimationFixed>
            <DarkModeAnimate background='grey-800-75%' position='fixed' />
          </OverflowAnimationFixed>

          <Styled.Label>B</Styled.Label>
        </Styled.CircularButton>
      </BorderButton>

      <AnimatePresence mode="wait" initial={false}>   
        {isActiveOption === 'main' && <OptionsList />}
        {isActiveOption === 'language' && <Language />}
        {isActiveOption === 'theme' && <Theme />}
      </AnimatePresence>
    </div>
  );
}
