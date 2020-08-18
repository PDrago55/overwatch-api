import { combineReducers } from "redux";

import team from "./team-stats-reducer";
import allTeam from "./all-team-stats-redcer";
import singleStats from "./single-player-stats";
import mapPool from "./map-pool-stats-reducer";
export default combineReducers({
  team,
  allTeam,
  singleStats,
  mapPool,
});
