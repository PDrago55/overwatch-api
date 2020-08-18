//-----------------------RECEIVE 5 STACK STATS------------//

export const requestTeamStats = () => ({
  type: "REQUEST_TEAM_STATS",
});

export const receiveTeamStats = (team) => ({
  type: "RECEIVE_TEAM_STATS",
  team,
});

export const receiveTeamStatsError = () => ({
  type: "RECEIVE_TEAM_STATS_ERROR",
});

//--------------RECEIVE 5 STACK WIN AND LOSSESS----------//

export const requestAllTeamStats = () => ({
  type: "REQUEST_ALL_TEAM_STATS",
});

export const receiveAllTeamStats = (allTeam) => ({
  type: "RECEIVE_ALL_TEAM_STATS",
  allTeam,
});

export const receiveAllTeamStatsError = () => ({
  type: "RECEIVE_ALL_TEAM_STATS_ERROR",
});

//-----------RECEIVE SINGLE USERS STATS----------//

export const requestSingleStats = () => ({
  type: "REQUEST_SINGLE_STATS",
});

export const receiveSingleStats = (myStats) => ({
  type: "RECEIVE_SINGLE_STATS",
  myStats,
});

export const receiveSingleStatsError = () => ({
  type: "RECEIVE_SINGLE_STATS_ERROR",
});

//-------RECEIVE MAP POOL AND STATS---------//

export const requestMapPool = () => ({
  type: "REQUEST_MAP_POOL",
});

export const receiveMapPool = (mapStats) => ({
  type: "RECEIVE_MAP_POOL",
  mapStats,
});

export const receiveMapPoolError = () => ({
  type: "RECEIVE_MAP_POOL_ERROR",
});
