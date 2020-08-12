const initialState = {
  team: [],
  status: "idle",
};

export default function teamStatsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_TEAM_STATS":
      return {
        ...state,
        status: "loading",
      };
    case "RECEIVE_TEAM_STATS":
      return {
        ...state,
        team: action.team.responseObject,
        status: "idle",
      };
    case "RECEIVE_TEAM_STATS_ERROR":
      return {
        ...state,
        status: "error",
      };
    default: {
      return state;
    }
  }
}
