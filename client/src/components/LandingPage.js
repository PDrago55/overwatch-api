import React from "react";
import PageLinkSiege from "./PageLinkSiege";
import GitCredit from "./GitCredit";
import styled from "styled-components";
function LandingPage() {
  return (
    <>
      <Container>
        <BackDrop>
          <div className="centerTitle">
            <h1 className="title">Welcome To Siege Stack</h1>
            <div className="title">
              A stat collector for you and your squad in Rainbow Six: Siege
            </div>
          </div>
        </BackDrop>
        <PageLinkSiege />
        <GitCredit />
      </Container>
    </>
  );
}

const Container = styled.div`
  position: absolute;
  .title {
    text-align: center;
    font-size: 55px;
    color: #ffffff;
    margin: 0px;
    padding: 20px 0px;
  }
  .centerTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
  }
`;

const BackDrop = styled.div`
  position: relative;
  background-image: url("/SledgeHeader.jpg");
  background-size: cover;
  height: 600px;
  width: 100%;
  @media (max-width: 736px) {
    height: 20%;
    width: 100%;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    .title {
      text-align: center;
      font-size: 32px;
      color: #ffffff;
      top: 50px;
      margin: 0px;
      padding: 20px 0px;
    }
  }
`;
export default LandingPage;
