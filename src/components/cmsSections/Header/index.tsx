import styled from 'styled-components';
import {  HeaderProps } from './header.type';
import { InsetBorder } from 'src/styles';

const Styled = {
  Button: styled.button`
    display: grid;
    place-items: center;
    border-radius: ${({ theme }) => theme.borderRadius.full};

    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    color: ${({ theme }) => theme.colors['grey-300']};
    font-size: 1.25rem;
    font-weight: 700;
    width: 48px;
    height: 48px;
    padding: .375rem;
  `,
};

export default function Header(props: HeaderProps) {
  // eslint-disable-next-line no-console
  console.log(props);

  return (
    <header>
      <InsetBorder>
        <Styled.Button>B</Styled.Button>
      </InsetBorder>
      <p>text</p>
    </header>
  );
}
