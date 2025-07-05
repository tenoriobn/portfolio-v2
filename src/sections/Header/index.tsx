import styled from 'styled-components';
import {
  BorderInset, OverflowAnimationFixed, OverflowAnimationAbsolute, transitionThemeAnimation, Wrapper
} from 'src/styles';
import ThemeToggle from './ThemeToggle';
import OptionsPanel from './OptionsPanel';
import Menu from './Menu';
import DarkModeAnimate from 'components/DarkModeAnimate';

const Styled = {
  Header: styled.header`
    background-color: ${({ theme }) => theme.colors['grey-900']};
    position: fixed;
    left: 0;
    right: 0;
    z-index: 99;
    padding-top: 1.5rem;
    ${transitionThemeAnimation}
  `,

  HeaderBorder: styled(BorderInset)`   
    border-radius: ${({ theme }) => theme.borderRadius.full};
    width: 100%;
  `,

  HeaderContent: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    padding: .75rem;
    ${transitionThemeAnimation}
  `,
};

export default function Header() {

  return (
    <Styled.Header>
      <OverflowAnimationAbsolute>
        <DarkModeAnimate position='absolute' />
      </OverflowAnimationAbsolute>

      <Wrapper>
        <Styled.HeaderBorder>
          <Styled.HeaderContent>
            <OverflowAnimationFixed>
              <DarkModeAnimate position="fixed" background="grey-800-75%" />
            </OverflowAnimationFixed>
            <OptionsPanel />
            <Menu />
            <ThemeToggle />
          </Styled.HeaderContent>
        </Styled.HeaderBorder>
      </Wrapper>
    </Styled.Header>
  );
}