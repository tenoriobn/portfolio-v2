import styled from 'styled-components';
import { BorderInset, Wrapper } from 'src/styles';
import ThemeToggle from './ThemeToggle';
import OptionsPanel from './OptionsPanel';
import Menu from './Menu';

const Styled = {
  Header: styled.header`
    background-color: ${({ theme }) => theme.colors['grey-900']};
    position: fixed;
    left: 0;
    right: 0;
    z-index: 99;
    padding-top: 1.5rem;
  `,

  HeaderBorder: styled(BorderInset)`   
    border-radius: ${({ theme }) => theme.borderRadius.full};
    width: 100%;
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
  return (
    <Styled.Header>
      <Wrapper>
        <Styled.HeaderBorder>
          <Styled.HeaderContent>
            <OptionsPanel />
            <Menu />
            <ThemeToggle />
          </Styled.HeaderContent>
        </Styled.HeaderBorder>
      </Wrapper>
    </Styled.Header>
  );
}