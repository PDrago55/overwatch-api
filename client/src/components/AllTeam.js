import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  requestAllTeamStats,
  receiveAllTeamStats,
  receiveAllTeamStatsError,
} from "../actions";

function AllTeam() {
  const dispatch = useDispatch();
  const allTeam = useSelector((state) => state.allTeam.allTeam);
  useEffect(() => {
    dispatch(requestAllTeamStats());
    fetch("/api/squad/all")
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveAllTeamStats(data));
      })
      .catch((error) => {
        dispatch(receiveAllTeamStatsError(error));
      });
  }, []);
  return (
    <>
      <StyledBackDrop className="image" src="home.jpg">
        <h1 className="header">Teams</h1>
      </StyledBackDrop>
      <Container>
        {allTeam.map((team) => {
          return (
            <>
              <div className="teamContainer">
                <div className="teamCards">
                  <img
                    src="trophy.png"
                    alt="trohpy"
                    width="100px"
                    height="100px"
                  ></img>
                  <div className="text">{team.currentSeason.wins}</div>
                  <div className="text">WINS</div>
                </div>
                <div className="teamCards">
                  <img
                    src="loss.png"
                    alt="lose"
                    width="100px"
                    height="100px"
                  ></img>
                  <div className="text">{team.currentSeason.losses}</div>
                  <div className="text">LOSSES</div>
                </div>
                <div className="teamCards">
                  <img
                    src="joystick.png"
                    alt="controller"
                    width="100px"
                    height="100px"
                  ></img>
                  <div className="text">{team.currentSeason.gamesPlayed}</div>
                  <div className="text">GAMES PLAYED</div>
                </div>
                <div className="teamCards">
                  <img
                    src="teamwork.png"
                    alt="team"
                    width="100px"
                    height="100px"
                  ></img>
                  <div className="text">{team.currentSeason.roundsWon}</div>
                  <div className="text">ROUNDS WON</div>
                </div>
                <div className="teamCards">
                  <img
                    src="skull.png"
                    alt="shitter"
                    width="100px"
                    height="100px"
                  ></img>
                  <div className="text">{team.currentSeason.roundsLost}</div>
                  <div className="text">ROUNDS LOST</div>
                </div>
              </div>
              <div className="operation">{team.currentSeason.season.name}</div>
            </>
          );
        })}
      </Container>
    </>
  );
}

const StyledBackDrop = styled.div`
  position: relative;
  background-image: url("/home.jpg");
  background-size: cover;
  width: 100%;
  height: 600px;
  .header {
    text-align: center;
    color: #ffffff;
  }
`;
const Container = styled.div`
  display: flex;
  position: absolute;
  top: 300px;
  flex-direction: column;
  .teamContainer {
    display: flex;
    flex-direction: row;
    padding: 50px;
  }
  .teamCards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    padding: 15px;
    border: 1px solid black;
    margin: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    transition: transform 1s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .text {
    margin-top: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(150, 150, 150, 1);
  }
  .operation {
    color: white;
    font-size: 36px;
    text-align: center;
    margin-bottom: 10px;
  }
`;
export default AllTeam;
