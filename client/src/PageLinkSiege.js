import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
function PageLinkSiege() {
  return (
    <Container>
      <div className="ImageDiv">
        <StyledLink to="/mystats">
          <div className="Title"> My Stats</div>
          <img
            src="SingleStats.jpeg"
            alt="1"
            height="350px"
            width="350px"
          ></img>
          <p className="textover">View My Stats</p>
        </StyledLink>
      </div>
      <div className="ImageDiv">
        <StyledLink to="/myteam">
          <div className="Title">Team Stats</div>
          <img src="SiegeSquad.jpg" alt="2" height="350px" width="350px"></img>
          <p className="textover">Learn Your Stacks Stats</p>
        </StyledLink>
      </div>
      <div className="ImageDiv">
        <StyledLink to="/">
          <div className="Title"> Map Pool</div>
          <img src="MapPool.jpg" alt="3" height="350px" width="350px"></img>
          <p className="textover">Get To Learn About The Maps</p>
        </StyledLink>
      </div>
    </Container>
  );
}

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  box-shadow: 3px 3px 5px 6px #ccc;
  border-radius: 15px;
  margin: 20px 10px;
  .ImageDiv {
    padding: 25px;
    &:hover {
      opacity: 0.5;
    }
  }
  .Title {
    text-align: center;
    color: black;
    font-size: 20px;
    margin-bottom: 5px;
  }
  .textover {
    position: relative;
    bottom: 200px;
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .ImageDiv {
      padding: 25px 0px;
      &:hover {
        opacity: 0.5;
      }
  }

`;
export default PageLinkSiege;