import styled from 'styled-components';
import {  HeaderProps } from './header.type';
import { useChangeLanguage } from './useChangeLanguage';

const Styled = {
  Header: styled.header`
    color: ${({ theme }) => theme.colors['grey-300']};
  `,

  Language: styled.div`
    display: flex;
    gap: 1rem;
    margin: 3rem 0;
  `
};

export default function Header(props: HeaderProps) {
  const { changeLanguage } = useChangeLanguage();

  return (
    <header>
      <Styled.Header>Header</Styled.Header>
      <p>{props.resumeLabel.linkName}</p>

      <Styled.Language>
        <button onClick={() => changeLanguage('pt_BR')}>Português</button>
        <button onClick={() => changeLanguage('es')}>Espanhol</button>
        <button onClick={() => changeLanguage('en')}>Inglês</button>
      </Styled.Language>
    </header>
  );
}
