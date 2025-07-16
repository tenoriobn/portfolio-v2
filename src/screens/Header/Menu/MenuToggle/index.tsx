import styled from 'styled-components';
import { AnimatePresence, motion } from 'motion/react';
import { scaleFade } from 'src/utils';
import { BorderButton, CircularButton } from 'src/styles';
import MenuIcon from 'public/icons/menu.svg';
import CloseIcon from 'public/icons/close.svg';
import useMenuToggle from './useMenuToggle';

const Styled = {
  Wrapper: styled(BorderButton)`
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

export default function MenuToggle() {
  const { isMenuActive, toggleMenu} = useMenuToggle();

  return (
    <Styled.Wrapper>
      <CircularButton onClick={toggleMenu}>
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
    </Styled.Wrapper>
  );
}
