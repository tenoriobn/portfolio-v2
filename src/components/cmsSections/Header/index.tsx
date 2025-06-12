import styled from 'styled-components';
import {  HeaderProps } from './header.type';

const Styled = {
  Header: styled.header`
    color: ${({ theme }) => theme.colors['grey-300']};
  `,
};

export default function Header(props: HeaderProps) {
  // eslint-disable-next-line no-console
  console.log('header: ', props);

  return (
    <header>
      <Styled.Header>Header</Styled.Header>
    </header>
  );
}
