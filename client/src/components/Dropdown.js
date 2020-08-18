import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { receiveSingleStats } from "../actions";

function Dropdown() {
  const [players, setPlayer] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("/api/player/all")
      .then((res) => res.json())
      .then((data) => {
        setPlayer(data.responseObject);
      });
  }, []);

  return (
    <>
      <DropContainer>
        <select
          className="select"
          onChange={(ev) => dispatch(receiveSingleStats(ev.target.value))}
          defaultValue=""
        >
          <option selected>Please Select a Player</option>
          {players.map((player) => {
            return <option value={player.code}>{player.name}</option>;
          })}
        </select>
      </DropContainer>
    </>
  );
}

const DropContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  .select {
    padding: 26px;
    font-size: 18px;
    margin: 10px;
    border: none;
    border-radius: 10px;
  }
`;
export default Dropdown;
