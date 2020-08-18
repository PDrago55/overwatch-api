import React from "react";
import Dropdown from "./Dropdown";
import PlayerStats from "./PlayerStats";
import styled from "styled-components";
function SinglesStats() {
  return (
    <MainContainer>
      <div className="backdrop">
        <Dropdown />
      </div>
      <div className="statsContainer">
        <PlayerStats />
      </div>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  .backdrop {
    position: relative;
    background-image: url("/R6op.jpg");
    background-size: cover;
    width: 50%;
    height: 100vh;
  }
  .statsContainer {
    display: flex;
    flex-direction: row;
    width: 50%;
  }
`;
export default SinglesStats;
