import styled from 'styled-components';
import { BorderInset, Wrapper } from 'src/styles';
import ThemeToggle from './ThemeToggle';
import OptionsPanel from './OptionsPanel';
import Menu from './Menu';

const Styled = {
  Header: styled.header`
    background-color: var(--color-grey-900);
    position: fixed;
    left: 0;
    right: 0;
    z-index: 99;
    padding-top: 1.5rem;
  `,

  Border: styled(BorderInset)`   
    border-radius: var(--radius-full);
    width: 100%;
  `,

  Content: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-800-75);
    border-radius: var(--radius-full);
    padding: .75rem;
  `,
};

export default function Header() {
  return (
    <Styled.Header>
      <Wrapper>
        <Styled.Border>
          <Styled.Content>
            <OptionsPanel />
            <Menu />
            <ThemeToggle />
          </Styled.Content>
        </Styled.Border>
      </Wrapper>
    </Styled.Header>
  );
}