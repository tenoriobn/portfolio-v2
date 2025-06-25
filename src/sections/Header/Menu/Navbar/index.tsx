import styled from 'styled-components';
import { AnimatePresence, motion } from 'motion/react';
import { BorderButton, borderInsetMixin, borderRaisedMixin, shadowSM } from 'src/styles';
import { slideFadeDown } from 'src/utils';
import useMenuToggle from '../MobileMenuToggle/useMenuToggle';
import { useCMSSection } from 'src/hook';
import { Link } from 'react-scroll';
import useScrollSpyInit from './useScrollSpyInit';

const Styled = {
  NavigationWrapper: styled(motion.div)<{$isMenuActive: boolean}>`
    @media (max-width: 991px) {
      display: ${({ $isMenuActive }) => $isMenuActive ? 'block' : 'none'};
      border-radius: ${({ theme }) => theme.borderRadius.md};
      right: 12px;
      top: 90px;
      ${borderInsetMixin}
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
    /* &:first-child {
      ${borderRaisedMixin};
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
    } */
  `,

  NavLink: styled(Link)`
    cursor: pointer;
    color: ${({ theme }) => theme.colors['grey-500']};
    white-space: nowrap;
    transition: color .3s ease-in-out;

    &.active {
      color: ${({ theme }) => theme.colors['grey-200']};
    }

    &:hover {
      color: ${({ theme }) => theme.colors['grey-300']};
    }
  `,

  MenuButtonContainer: styled(BorderButton)`
    @media (min-width: 992px) {
      display: none;
    }
  `,

  ThemeButtonContainer: styled(BorderButton)`
    @media (max-width: 991px) {
      display: none;
    }
  `,
};

export default function Navbar() {
  const { menu } = useCMSSection('HeaderBlockRecord');
  const { isMenuActive, closeMenu } = useMenuToggle();
  useScrollSpyInit();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Styled.NavigationWrapper 
        $isMenuActive={isMenuActive}
        key='navlinks'
        {...slideFadeDown}
      >
        <Styled.Navigation>
          <Styled.NavList>            
            {menu.items.map((item) => (
              <Styled.NavItem key={item.id}>
                <Styled.NavLink 
                  to={item.href} 
                  spy={true}
                  smooth={true}
                  offset={-200}
                  isDynamic={true}
                  duration={300}
                  activeClass="active"
                  onClick={closeMenu}
                >
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

// Corrigir animação, não está sendo aplicada devido a key única e preciso dessa key sendo única se não ele não salva o link active ao fechar o menu mobile
// Corrigir scroll ao descer para a seção de contato que não marca o link "contato" do menu como active, pois o "offset={-200}" não alcança.
