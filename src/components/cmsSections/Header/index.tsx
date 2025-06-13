import styled from 'styled-components';
import {  HeaderProps } from './header.type';
import Link from 'next/link';
import { useSetLocale } from 'src/service/postLocale';

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
  const { setLocale } = useSetLocale();

  return (
    <header>
      <Styled.Header>Header</Styled.Header>
      <p>{props.resumeLabel.linkName}</p>

      <Styled.Language>
        <Link href='/' locale="pt_BR" onClick={() => setLocale('pt_BR')}>Portugues</Link>
        <Link href='/' locale="es" onClick={() => setLocale('es')}>Espanhol</Link>
        <Link href='/' locale="en" onClick={() => setLocale('en')}>Inglês</Link>
      </Styled.Language>
    </header>
  );
}
