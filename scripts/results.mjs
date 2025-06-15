document.addEventListener("DOMContentLoaded", () => {
    const playerName = localStorage.getItem("ls-player");
    searchPlayer(playerName);
});

async function searchPlayer(playerName){
    const url = `https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBPlayerInfo?playerName=${playerName}&getStats=true&statsSeason=2025`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd62ff818fdmshf4feea5fde1723bp13ebe8jsn1893f39e23c2',
            'x-rapidapi-host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        displayPlayerSearch(result.body)
    } catch (error) {
        console.error(error);
    }

}

export function displayPlayerSearch(players) {
    const cards = document.querySelector("#cards")

    if (!cards) return;
    cards.innerHTML = "";

    if (players.length === 0) {
        const noPlayer = document.createElement("p");
        noPlayer.textContent = `No results for that player.`
        cards.appendChild(noPlayer)
        return;
    }

    players.forEach(player => {
        let playerCard = document.createElement("section");
        let playerName = document.createElement('h2');
        let playerNum = document.createElement('p')
        let playerPosition = document.createElement('p')
        let playerpic = document.createElement('img')
        let statOne = document.createElement('p')
        let statTwo = document.createElement('p')
        let statThree = document.createElement('p')
        let statFour = document.createElement('p')

        playerNum.textContent = `# ${player.jerseyNum}`;
        playerName.textContent = `${player.longName}`;
        playerPosition.textContent = `Position: ${player.pos}`;
        playerpic.setAttribute('src', `${player.mlbHeadshot}`);
        playerpic.setAttribute('alt', `${player.playerName} logo`);
        playerpic.setAttribute('loading', 'lazy');
        playerpic.setAttribute('width', '100');
        playerpic.setAttribute('height', '100');

        if (player.pos === "P") {

            statOne.textContent = `Wins: ${player.stats.Pitching.Win}`;
            statTwo.textContent = `ERA: ${player.stats.Pitching.ERA}`;
            statThree.textContent = `K: ${player.stats.Pitching.SO}`;
            statFour.textContent = `SV: ${player.stats.Pitching.Save}`;
        } else {

            statOne.textContent = `AVG: ${player.stats.Hitting.avg ?? 'N/A'}`;
            statTwo.textContent = `HR: ${player.stats.Hitting.HR}`;
            statThree.textContent = `RBI: ${player.stats.Hitting.RBI}`;
            statFour.textContent = `SB: ${player.stats.BaseRunning.SB}`;
        }

        playerCard.appendChild(playerName); 
        playerCard.appendChild(playerpic); 
        playerCard.appendChild(playerNum); 
        playerCard.appendChild(playerPosition);
        playerCard.appendChild(statOne) 
        playerCard.appendChild(statTwo) 
        playerCard.appendChild(statThree) 
        playerCard.appendChild(statFour)
    
    // playerClassList.add('player');
    
    cards.appendChild(playerCard); 
});
    }
