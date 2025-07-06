import styled from 'styled-components';
import { AnimatePresence, motion } from 'motion/react';
import { BorderButton, borderInsetMixin, shadowSM } from 'src/styles';
import useMenuToggle from '../MobileMenuToggle/useMenuToggle';
import useScrollSpyInit from './useScrollSpyInit';
import { Link } from 'react-scroll';
import { useCMSSection } from 'src/hook';
import { slideFadeDown } from 'src/utils';

const Styled = {
  NavigationWrapper: styled(motion.div)<{$isMenuActive: boolean}>`
    @media (max-width: 991px) {
      pointer-events: ${({ $isMenuActive }) => $isMenuActive ? 'auto' : 'none'};
      border-radius: ${({ theme }) => theme.borderRadius.md};
      right: 12px;
      top: 90px;
      ${borderInsetMixin}
      ${shadowSM}
      position: absolute;
      width: 172px;
    }

    @media (min-width: 992px) {
      opacity: 1 !important;
      transform: none !important;
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

  NavLink: styled(Link)<{$forceActive?: boolean; $forceInactive?: boolean}>`
    cursor: pointer;
    color: ${({ theme, $forceActive,  }) => theme.colors[$forceActive ? 'grey-200' : 'grey-500']};
    white-space: nowrap;
    transition: color ${({ theme }) => theme.transitions.default};

    &.active {
      color: ${({ theme, $forceInactive }) => theme.colors[$forceInactive ? 'grey-500' : 'grey-200']};
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
  const { isContactVisible } = useScrollSpyInit();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Styled.NavigationWrapper 
        $isMenuActive={isMenuActive}
        key="navlinks"
        animate={isMenuActive ? 'animate' : 'exit'}
        initial="initial"
        variants={slideFadeDown}
      >
        <Styled.Navigation>
          <Styled.NavList>            
            {menu.items.map((item) => (
              <li key={item.id}>
                <Styled.NavLink
                  to={item.href} 
                  spy={true}
                  smooth={true}
                  offset={-190}
                  duration={600}
                  activeClass='active'
                  onClick={closeMenu}
                  $forceActive={isContactVisible && item.href === 'ContactSectionBlockRecord'}
                  $forceInactive={isContactVisible && item.href !== 'ContactSectionBlockRecord'}
                >
                  {item.linkName}
                </Styled.NavLink>
              </li>
            ))}
          </Styled.NavList>
        </Styled.Navigation>
      </Styled.NavigationWrapper>
    </AnimatePresence>
  );
}