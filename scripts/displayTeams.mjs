export function displayTeams (data) {
    const cards = document.querySelector("#cards")
    cards.innerHTML = "";
    data.forEach(team => {
        let card = document.createElement("section");
        let teamName = document.createElement('h3');
        let teamLogo = document.createElement('img');

        teamName.textContent = `${team.teamCity} ${team.teamName}`;
        teamLogo.setAttribute('src', team.mlbLogo1);
        teamLogo.setAttribute('alt', `${team.teamName} logo`);
        teamLogo.setAttribute('loading', 'lazy');
        teamLogo.setAttribute('width', '100');
        teamLogo.setAttribute('height', '100');
        
        card.appendChild(teamLogo);
        card.appendChild(teamName); 
        
        cards.appendChild(card);

        card.classList.add('team');
    });
}