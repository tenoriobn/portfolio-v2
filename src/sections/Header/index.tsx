import styled from "styled-components"

const Styled = {
  Header: styled.header`
    color: red;
  `,
}

export default function Header() {
  return (
    <header>
      <Styled.Header>Header</Styled.Header>
    </header>
  )
}
