const initialState = {
  allTeam: [],
  status: "idle",
};

export default function allTeamStatsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ALL_TEAM_STATS":
      return {
        ...state,
        status: "loading",
      };
    case "RECEIVE_ALL_TEAM_STATS":
      return {
        ...state,
        status: "idle",
        allTeam: action.allTeam.responseObject,
      };
    case "RECEIVE_ALL_TEAM_STATS_ERROR":
      return {
        ...state,
        status: "error",
      };
    default: {
      return state;
    }
  }
}
