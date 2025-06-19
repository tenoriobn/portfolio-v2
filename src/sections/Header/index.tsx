import styled from 'styled-components';
import { BorderInset } from 'src/styles';
import ThemeToggle from './ThemeToggle';
import OptionsPanel from './OptionsPanel';
import Menu from './Menu';

const Styled = {
  Header: styled(BorderInset)`   
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

  return (
    <Styled.Header as='header'>
      <Styled.HeaderContent>
        <OptionsPanel />
        <Menu />
        <ThemeToggle />
      </Styled.HeaderContent>
    </Styled.Header>
  );
}