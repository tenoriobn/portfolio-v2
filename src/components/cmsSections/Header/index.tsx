/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import useResponsiveMenu from './useResponsiveMenu';
import { InsetBorder } from 'src/styles';
import {  HeaderProps } from './header.type';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import OptionsToggle from './OptionsToggle';
import MobileMenuToggle from './MobileMenuToggle';
import { useHeaderStore } from 'src/stores/useHeaderStore';
import { useEffect } from 'react';

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

export default function Header({menu, language, themeOptions, resumeLabel}: HeaderProps) {
  const { isMenuActive, toggleMenu, isMobile } = useResponsiveMenu();
  const setHeaderData = useHeaderStore((state) => state.setHeaderData);

  useEffect(() => {
    setHeaderData({ menu, language, themeOptions, resumeLabel });
  }, [menu, language, themeOptions, resumeLabel]);

  return (
    <Styled.Header as='header'>
      <Styled.HeaderContent>
        <OptionsToggle />

        <Navbar
          items={menu.items} 
          isMenuActive={isMenuActive}
          toggleMenu={() => isMobile && toggleMenu()}
          isMobile={isMobile}
        />

        <MobileMenuToggle isMenuActive={isMenuActive} toggleMenu={toggleMenu} />
      
        {!isMobile && ( <ThemeToggle themes={themeOptions.theme} /> )}
      </Styled.HeaderContent>
    </Styled.Header>
  );
}