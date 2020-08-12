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

  console.log(allTeam);
  return (
    <Container>
      {allTeam.map((team) => {
        return (
          <div className="teamContainer">
            <div className="teamCards">
              <div>{team.currentSeason.wins}</div>
              <div>WINS</div>
            </div>
            <div className="teamCards">
              <div>{team.currentSeason.losses}</div>
              <div>LOSSES</div>
            </div>
            <div className="teamCards">
              <div>{team.currentSeason.gamesPlayed}</div>
              <div>GAMES PLAYED</div>
            </div>
            <div className="teamCards">
              <div>{team.currentSeason.roundsLost}</div>
              <div>ROUNDS LOST</div>
            </div>
            <div className="teamCards">
              <div>{team.currentSeason.roundsWon}</div>
              <div>ROUNDS WON</div>
            </div>
            <div>{team.currentSeason.season.name}</div>
          </div>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  .teamContainer {
    display: flex;
    flex-direction: row;
    padding: 10px;
  }
  .teamCards {
    padding: 25px;
    border: 1px solid black;
    margin: 10px;
  }
`;
export default AllTeam;
