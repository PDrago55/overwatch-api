import { combineReducers } from "redux";

import team from "./team-stats-reducer";
import allTeam from "./all-team-stats-redcer";
export default combineReducers({
  team,
  allTeam,
});
