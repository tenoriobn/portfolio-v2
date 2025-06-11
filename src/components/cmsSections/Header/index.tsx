import styled from 'styled-components';

const Styled = {
  Header: styled.header`
    color: red;
  `,
};

export default function Header(props) {
  console.log('header: ', props);

  return (
    <header>
      <Styled.Header>Header</Styled.Header>
    </header>
  );
}
