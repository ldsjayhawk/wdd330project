// const hamburger = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');

// hamburger.addEventListener('click', () => {
// 	navigation.classList.toggle('open');
// 	hamburger.classList.toggle('open');
// });

const teams = [
    {team: "1",
    name: "Arizona Diamondbacks",
    username: "Kuesmo"},
    {team: "2",
    name: "Athletics",
    username: "GottaBleve"},
    {team: "3",
    name: "Atlanta Braves",
    username: "Rolltide555"},
    {team: "4",
    name: "Baltimore Orioles",
    username: "benwasik"},
    {team: "5",
    name: "Boston Red Sox",
    username: "jmntl82"},
    {team: "6",
    name: "Chicago Cubs",
    username: "dbreer23"},
    {team: "7",
    name: "Chicago White Sox",
    username: "breethroz"},
    {team: "8",
    name: "Cincinnati Reds",
    username: "davisports"},
    {team: "9",
    name: "Cleveland Guardians",
    username: "briansports01"},
    {team: "10",
    name: "Colorado Rockies",
    username: "Pwst"},
    {team: "11",
    name: "Detroit Tigers",
    username: "christoffurness"},
    {team: "12",
    name: "Houston Astros",
    username: "jschwab"},
    {team: "13",
    name: "Kansas City Royals",
    username: "ldsjayhawk"},
    {team: "14",
    name: "Los Angeles Angels",
    username: "game162"},
    {team: "15",
    name: "Los Angeles Dodgers",
    username: "BHows"},
    {team: "16",
    name: "Miami Marlins",
    username: "CloudZELL91"},
    {team: "17",
    name: "Milwaukee Brewers",
    username: "Alpha5"},
    {team: "18",
    name: "Minnesota Twins",
    username: "gocubsgo7"},
    {team: "19",
    name: "New York Mets",
    username: "deathvalley"},
    {team: "20",
    name: "New York Yankees",
    username: ""},
    {team: "21",
    name: "Philadelphia Phillies",
    username: "chudz"},
    {team: "22",
    name: "Pittsburgh Pirates",
    username: "shannonwalker"},
    {team: "23",
    name: "San Diego Padres",
    username: "BayAreaBallers"},
    {team: "24",
    name: "San Francisco Giants",
    username: "NippyJones"},
    {team: "25",
    name: "Seattle Mariners",
    username: "harschman"},
    {team: "26",
    name: "St. Louis Cardinals",
    username: "RyanJames5"},
    {team: "27",
    name: "Tampa Bay Rays",
    username: "kidd5jersey"},
    {team: "28",
    name: "Texas Rangers",
    username: "rcankosy"},
    {team: "29",
    name: "Toronto Blue Jays",
    username: "frankbullsfan"},
    {team: "30",
    name: "Washington Nationals",
    username: "dave_wasik_sb"}];
    
const mlb = document.getElementById("mlb");
const fgm = document.getElementById("fgm");

teams.forEach(item => {
    const option = document.createElement('option');
    option.textContent = item.name;
    mlb.appendChild(option);
});

teams.forEach(item => {
    const option = document.createElement('option');
    option.textContent = item.name;
    fgm.appendChild(option);
});
