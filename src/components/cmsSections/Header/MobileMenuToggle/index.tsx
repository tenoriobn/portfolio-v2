import styled from 'styled-components';
import { AnimatePresence, motion } from 'motion/react';
import { scaleFade } from 'src/utils';
import { ButtonBorder, ControlButton } from 'src/styles';
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

export default function MobileMenuToggle({ isMenuActive, toggleMenu }: MenuButtonMobileProps) {
  return (
    <Styled.MenuButtonContainer>
      <ControlButton onClick={toggleMenu}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={isMenuActive ? 'close' : 'menu'} {...scaleFade}>
            {isMenuActive ? <CloseIcon /> : <MenuIcon />}
          </motion.span>
        </AnimatePresence>
      </ControlButton>
    </Styled.MenuButtonContainer>
  );
}
