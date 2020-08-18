import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  requestMapPool,
  receiveMapPool,
  receiveMapPoolError,
} from "../actions";
function MapPool() {
  const dispatch = useDispatch();
  const [theMaps, setMaps] = useState([]);
  const mapPool = useSelector((state) => state.mapPool.mapStats);
  useEffect(() => {
    dispatch(requestMapPool());
    fetch("/api/map/map-details?seasonCode=17&squadCode=1")
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveMapPool(data.responseObject));
      })
      .catch((err) => {
        dispatch(receiveMapPoolError(err));
      });
  }, []);
  console.log(theMaps);
  return (
    <MapContainer>
      {mapPool.map((map) => {
        return (
          <div className="mapCard">
            <div>{map.map.name}</div>
            <div>{map.gamesPlayed}</div>
            <div>{map.wins}</div>
            <div>{map.losses}</div>
            <div>{map.winPercentage}</div>
          </div>
        );
      })}
    </MapContainer>
  );
}

const MapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .mapCard {
    border: 1px solid black;
    border-radius: 8px;
    margin: 20px 30px;
    padding: 50px;
    width: 200px;
    text-align: center;
    line-height: 1.6;
  }
`;
export default MapPool;
