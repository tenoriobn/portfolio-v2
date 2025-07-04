import styled from 'styled-components';
import { BorderInset, Wrapper } from 'src/styles';
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
    transition: background-color 5s ease-in-out;
  `,
  
  HeaderOverflowFix: styled.div`
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
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
    transition: background-color 3s ease-in-out;
  `,

  HeaderOverflow: styled.div`
    position: absolute;
    inset: 0;
    pointer-events: none;
    mask-image: radial-gradient(circle at center, black 100%, transparent 100%);
    -webkit-mask-image: radial-gradient(circle at center, black 100%, transparent 108%);
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
    border-radius: ${({ theme }) => theme.borderRadius.full};
  `,
};

export default function Header() {

  return (
    <Styled.Header>
      <Styled.HeaderOverflowFix>
        <DarkModeAnimate position='absolute' />
      </Styled.HeaderOverflowFix>

      <Wrapper>
        <Styled.HeaderBorder>
          <Styled.HeaderContent>
            <Styled.HeaderOverflow>
              <DarkModeAnimate position="fixed" background="rgba(51, 51, 51, 1)" />
            </Styled.HeaderOverflow>
            <OptionsPanel />
            <Menu />
            <ThemeToggle />
          </Styled.HeaderContent>
        </Styled.HeaderBorder>
      </Wrapper>
    </Styled.Header>
  );
}