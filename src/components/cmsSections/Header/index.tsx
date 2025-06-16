import styled from 'styled-components';
import useResponsiveMenu from './useResponsiveMenu';
import { InsetBorder } from 'src/styles';
import {  HeaderProps } from './header.type';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import MenuButtonMobile from './MenuButtonMobile';
import OptionsButton from './OptionsButton';

const Styled = {
  Header: styled(InsetBorder)`   
    border-radius: ${({ theme }) => theme.borderRadius.full};
    width: 100%;
    margin-top: 1.5rem;
  `,

  HeaderContent: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    padding: .75rem;
  `,
};

export default function Header(props: HeaderProps) {
  const { isMenuActive, toggleMenu, isMobile } = useResponsiveMenu();

  // eslint-disable-next-line no-console
  console.log(props);

  return (
    <Styled.Header as='header'>
      <Styled.HeaderContent>
        <OptionsButton />

        <Navbar 
          items={props.menu.items} 
          isMenuActive={isMenuActive}
          toggleMenu={() => isMobile && toggleMenu()}
          isMobile={isMobile}
        />

        {isMobile && ( <MenuButtonMobile isMenuActive={isMenuActive} toggleMenu={toggleMenu} />)}
        
        {!isMobile && ( <ThemeToggle themes={props.themeOptions.theme} /> )}
      </Styled.HeaderContent>
    </Styled.Header>
  );
}