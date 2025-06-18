/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import useResponsiveMenu from './useResponsiveMenu';
import { InsetBorder } from 'src/styles';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import OptionsToggle from './OptionsToggle';
import MobileMenuToggle from './MobileMenuToggle';
import { useCMSSection } from '../useCMSSection.ts';

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

export default function Header() {
  const { menu, language, themeOptions, resumeLabel } = useCMSSection('HeaderBlockRecord');
  const { isMenuActive, toggleMenu, isMobile } = useResponsiveMenu();

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