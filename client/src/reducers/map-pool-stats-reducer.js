const initialState = {
  mapStats: [],
  status: "idle",
};

export default function mapPoolStats(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_MAP_POOL":
      return {
        ...state,
        status: "loading",
      };
    case "RECEIVE_MAP_POOL":
      return {
        ...state,
        status: "idle",
        mapStats: action.mapStats,
      };
    case "RECEIVE_MAP_POOL_ERROR":
      return {
        ...state,
        status: "error",
      };
    default:
      return state;
  }
}
