import React, { useEffect } from "react";
import styled from "styled-components";
import AllTeam from "./AllTeam";
import { useSelector, useDispatch } from "react-redux";
import {
  requestTeamStats,
  receiveTeamStats,
  receiveTeamStatsError,
} from "../actions";

function Team() {
  //redux creating my dispatch to get my actions aka State getter
  const dispatch = useDispatch();
  const teamStats = useSelector((state) => state.team.team);
  console.log(teamStats);
  useEffect(() => {
    dispatch(requestTeamStats());
    fetch("/api/squad/all")
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveTeamStats(data));
      })
      .catch((error) => {
        dispatch(receiveTeamStatsError(error));
      });
  }, []);
  return (
    <Container>
      <h1>Teams</h1>
      {teamStats.map((team) => {
        return (
          <>
            <AllTeam />
            <h1>{team.name}</h1>
            <div>
              <StyledTable>
                <thead>
                  <tr className="rowStyle">
                    <th className="styleHead">Name</th>
                    <th className="styleHead">PSN</th>
                    <th className="styleHead">Kills</th>
                    <th className="styleHead">Deaths</th>
                    <th className="styleHead">Kill/Death Ratio</th>
                  </tr>
                </thead>
                {team.players.map((player) => {
                  return (
                    <>
                      <tbody>
                        <tr className="rowStyle">
                          <td className="column">{player.name}</td>
                          <td className="column">{player.alias}</td>
                          <td className="column">
                            {player.currentSeason.kills}
                          </td>
                          <td className="column">
                            {player.currentSeason.deaths}
                          </td>
                          <td className="column">{player.currentSeason.kd}</td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
              </StyledTable>
            </div>
          </>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTable = styled.table`
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 100px;
  .styleHead {
    padding: 10px;
    font-size: 25px;
    border-bottom: 2px solid black;
  }
  .column {
    padding: 45px;
    text-align: center;
    font-size: 20px;
    border-bottom: 2px solid black;
  }
`;

export default Team;
