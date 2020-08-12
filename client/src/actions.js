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
