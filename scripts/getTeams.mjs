import { displayTeams } from "./displayTeams.mjs";

const url = 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeams?teamStats=true&topPerformers=false&rosters=true';
const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '4b64a39b79mshf12c62d98b7fe2ap176eccjsn41fda701d805',
      'x-rapidapi-host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
    }
  };

async function getTeamData() {
    const response = await fetch(url,options);
    if (response.ok) {
      const data = await response.json();
      console.table(data);
      displayTeams(data.body);
    }};


getTeamData();

