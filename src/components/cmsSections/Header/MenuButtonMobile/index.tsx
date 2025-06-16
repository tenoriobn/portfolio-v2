import styled from 'styled-components';
import { AnimatePresence, motion } from 'motion/react';
import { scaleFade } from 'src/utils';
import { Button, ButtonBorder } from 'src/styles';
import { MenuButtonMobileProps } from './menuButtonMobile.type';
import MenuIcon from 'public/icons/menu.svg';
import CloseIcon from 'public/icons/close.svg';

const Styled = {
  MenuButtonContainer: styled(ButtonBorder)`
    @media (min-width: 992px) {
      display: none;
    }
  `,
};

export default function MenuButtonMobile({ isMenuActive, toggleMenu }: MenuButtonMobileProps) {
  return (
    <Styled.MenuButtonContainer>
      <Button onClick={toggleMenu}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={isMenuActive ? 'close' : 'menu'} {...scaleFade}>
            {isMenuActive ? <CloseIcon /> : <MenuIcon />}
          </motion.span>
        </AnimatePresence>
      </Button>
    </Styled.MenuButtonContainer>
  );
}
