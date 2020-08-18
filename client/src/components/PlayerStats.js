import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
function PlayerStats() {
  const [players, setPlayer] = useState([]);
  const option = useSelector((state) => state.singleStats.myStats);
  useEffect(() => {
    fetch("/api/player/all")
      .then((res) => res.json())
      .then((data) => {
        setPlayer(data.responseObject);
      });
  }, []);
  console.log(players);
  return (
    <>
      <PlayerContainer>
        {players.map((player) => {
          return (
            <>
              <div>
                {player.code === parseInt(option) ? (
                  <div className="card">
                    <div className="stats">{player.name}</div>
                    <img
                      src="joystick.png"
                      alt="controller"
                      height="50px"
                      width="50px"
                    ></img>
                    <div className="stats">{player.alias}</div>
                    <img
                      src="superhero.png"
                      alt="role"
                      height="50px"
                      width="50px"
                    ></img>
                    <div className="stats">{player.role}</div>
                    <div>GAMES PLAYED</div>
                    <div className="stats">
                      {player.currentSeason.gamesPlayed}
                    </div>
                    <img
                      src="target.png"
                      alt="target"
                      height="50px"
                      width="50px"
                    ></img>
                    <div className="stats">{player.currentSeason.kills}</div>
                    <img
                      src="skull.png"
                      alt="skull"
                      height="50px"
                      width="50px"
                    ></img>
                    <div className="stats">{player.currentSeason.deaths}</div>
                    <div>ASSISTS</div>
                    <div className="stats">{player.currentSeason.assists}</div>
                    <div>KILLS PER GAME</div>
                    <div className="stats">
                      {player.currentSeason.killsPerGame}
                    </div>
                    <div>DEATHS PER GAME</div>
                    <div className="stats">
                      {player.currentSeason.deathsPerGame}
                    </div>
                    <div>K/D</div>
                    <div className="stats">{player.currentSeason.kd}</div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </>
          );
        })}
      </PlayerContainer>
    </>
  );
}

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 15px 55px;
    border-radius: 8px;
    margin: 8px;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    font-size: 18px;
    text-align: center;
  }
  .stats {
    font-weight: bold;
    font-size: 24px;
    margin-top: 8px;
  }
`;
export default PlayerStats;
