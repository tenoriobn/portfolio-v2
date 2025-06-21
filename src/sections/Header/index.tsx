import styled from 'styled-components';
import { BorderInset } from 'src/styles';
import ThemeToggle from './ThemeToggle';
import OptionsPanel from './OptionsPanel';
import Menu from './Menu';

const Styled = {
  Header: styled.header`
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 99;
    padding: 1.5rem 1rem 0.0625rem;
    background-color: ${({ theme }) => theme.colors['grey-900']};
  `,

  HeaderBorder: styled(BorderInset)`   
    border-radius: ${({ theme }) => theme.borderRadius.full};
    width: 100%;
    margin-top: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
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
      <Styled.HeaderBorder>
        <Styled.HeaderContent>
          <OptionsPanel />
          <Menu />
          <ThemeToggle />
        </Styled.HeaderContent>
      </Styled.HeaderBorder>
    </Styled.Header>
  );
}