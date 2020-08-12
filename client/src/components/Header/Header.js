import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
function Header() {
  return (
    <Container>
      <Nav />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  width: 100%;
`;
export default Header;
