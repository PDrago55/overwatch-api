const initialState = {
  myStats: "",
  status: "idle",
};

export default function singlePlayerStats(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_SINGLE_STATS":
      return {
        ...state,
        status: "loading",
      };
    case "RECEIVE_SINGLE_STATS":
      return {
        ...state,
        status: "idle",
        myStats: action.myStats,
      };
    case "RECEIVE_SINGLE_STATS_ERROR":
      return {
        ...state,
        status: "error",
      };
    default: {
      return state;
    }
  }
}
