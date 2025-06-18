import Link from 'next/link';
import { ButtonBorder, insetBorder, raisedBorder, shadowSM } from 'src/styles';
import styled from 'styled-components';
import { NavbarProps } from './navbar.type';
import { slideFadeDown } from 'src/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useCMSSection } from '../../useCMSSection.ts';

const Styled = {
  NavigationWrapper: styled(motion.div)<{$isMenuActive: boolean}>`
    @media (max-width: 991px) {
      display: ${({ $isMenuActive }) => $isMenuActive ? 'block' : 'none'};
      border-radius: ${({ theme }) => theme.borderRadius.md};
      right: 12px;
      top: 90px;
      ${insetBorder}
      ${shadowSM}
      position: absolute;
      width: 172px;
    }
  `,

  Navigation: styled.nav`
    @media (max-width: 991px) {
      background-color: ${({ theme }) => theme.colors['grey-800-75%']};
      border-radius: ${({ theme }) => theme.borderRadius.md};
      padding: 1rem;
    }
  `,

  NavList: styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 991px) {
      flex-direction: column;
    }

    @media (min-width: 768px) {
      gap: 1.5rem;
    }
  `,

  NavItem: styled.li`
    &:first-child {
      ${raisedBorder};
      border-radius: ${({ theme }) => theme.borderRadius.full};
      width: 100%;
      text-align: center;

      a {
        display: block;
        border-radius: ${({ theme }) => theme.borderRadius.full};
        background-color: ${({ theme }) => theme.colors['grey-800-75%']};
        color: ${({ theme }) => theme.colors['grey-200']};
        padding: .75rem 1.5rem;
        width: 100%;
      }
    }
  `,

  NavLink: styled(Link)`
    color: ${({ theme }) => theme.colors['grey-500']};
    white-space: nowrap;
  `,

  MenuButtonContainer: styled(ButtonBorder)`
    @media (min-width: 992px) {
      display: none;
    }
  `,

  ThemeButtonContainer: styled(ButtonBorder)`
    @media (max-width: 991px) {
      display: none;
    }
  `,
};

export default function Navbar({ isMenuActive, toggleMenu, isMobile }: NavbarProps) {
  const { menu } = useCMSSection('HeaderBlockRecord');
  const mobileSlideFadeDown = isMobile ? slideFadeDown : {};

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Styled.NavigationWrapper 
        $isMenuActive={isMenuActive}
        key={isMenuActive ? 'open' : 'close'}
        {...mobileSlideFadeDown}
      >
        <Styled.Navigation>
          <Styled.NavList>            
            {menu.items.map((item) => (
              <Styled.NavItem key={item.id}>
                <Styled.NavLink href="#" onClick={toggleMenu}>
                  {item.linkName}
                </Styled.NavLink>
              </Styled.NavItem>
            ))}
          </Styled.NavList>
        </Styled.Navigation>
      </Styled.NavigationWrapper>
    </AnimatePresence>
  );
}
