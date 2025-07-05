import styled from 'styled-components';
import { AnimatePresence, motion } from 'motion/react';
import { scaleFade } from 'src/utils';
import { BorderButton, CircularButton, OverflowAnimationFixed } from 'src/styles';
import MenuIcon from 'public/icons/menu.svg';
import CloseIcon from 'public/icons/close.svg';
import useMenuToggle from './useMenuToggle';
import DarkModeAnimate from 'src/components/DarkModeAnimate';

const Styled = {
  MenuButtonContainer: styled(BorderButton)`
    span {
      position: relative;
      z-index: 5;
    }

    @media (min-width: 992px) {
      display: none;
    }
  `,

  CloseIcon: styled(CloseIcon)`
    path {
      stroke-width: 2;
    }
  `,
};

export default function MobileMenuToggle() {
  const { isMenuActive, toggleMenu} = useMenuToggle();

  return (
    <Styled.MenuButtonContainer>
      <CircularButton onClick={toggleMenu}>
        <OverflowAnimationFixed>
          <DarkModeAnimate background='grey-800-75%' position='fixed' />
        </OverflowAnimationFixed>

        <AnimatePresence mode="wait" initial={false}>
          <motion.span 
            key={isMenuActive ? 'close' : 'menu'}
            animate='animate'
            initial="initial"
            exit='exit'
            variants={scaleFade}
          >
            {isMenuActive ? <Styled.CloseIcon /> : <MenuIcon />}
          </motion.span>
        </AnimatePresence>
      </CircularButton>
    </Styled.MenuButtonContainer>
  );
}
