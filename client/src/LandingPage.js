import React from "react";
import PageLinkSiege from "./PageLinkSiege";
import GitCredit from "./GitCredit";
import styled from "styled-components";
function LandingPage() {
  return (
    <Container>
      <h1 className="title">Welcome To Siege Stack</h1>
      <div className="title">
        A stat collector for you and your squad in Rainbow Six: Siege
      </div>
      <PageLinkSiege />
      <GitCredit />
    </Container>
  );
}

const Container = styled.div`
  .title {
    text-align: center;
  }
`;
export default LandingPage;
