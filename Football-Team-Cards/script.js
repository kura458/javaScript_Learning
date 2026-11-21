
"use strict";

// Football team information
const footballTeam = {
  team: "Argentina",
  year: 2026,
  headCoach: "Lionel Scaloni",
  players: [
    {
      name: "Lionel Messi",
      position: "forward",
      isCaptain: true
    },
    {
      name: "Lautaro Martinez",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Julian Alvarez",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Alexis Mac Allister",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Enzo Fernandez",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Rodrigo De Paul",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Cristian Romero",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Nicolas Otamendi",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Emiliano Martinez",
      position: "goalkeeper",
      isCaptain: false
    }
  ]
};

// Select the HTML elements
const teamElement = document.getElementById("team");
const yearElement = document.getElementById("year");
const headCoachElement = document.getElementById("head-coach");
const playerCardsContainer = document.getElementById("player-cards");
const playersDropdown = document.getElementById("players");

// Display team information
function displayTeamInformation() {
  teamElement.textContent = footballTeam.team;
  yearElement.textContent = footballTeam.year;
  headCoachElement.textContent = footballTeam.headCoach;
}

// Create and display player cards
function displayPlayers(players) {
  // Clear the previous player cards
  playerCardsContainer.innerHTML = "";

  players.forEach((player, index) => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");

    const playerNumber = document.createElement("span");
    playerNumber.classList.add("player-number");
    playerNumber.textContent = String(index + 1).padStart(2, "0");

    const playerName = document.createElement("h2");
    playerName.textContent = player.isCaptain
      ? `(Captain) ${player.name}`
      : player.name;

    const playerPosition = document.createElement("p");
    playerPosition.textContent = `Position: ${player.position}`;

    playerCard.appendChild(playerNumber);
    playerCard.appendChild(playerName);
    playerCard.appendChild(playerPosition);

    if (player.isCaptain) {
      const captainTag = document.createElement("span");
      captainTag.classList.add("captain-tag");
      captainTag.textContent = "TEAM CAPTAIN";
      playerCard.appendChild(captainTag);
    }

    playerCardsContainer.appendChild(playerCard);
  });
}

// Filter players based on the selected position
function filterPlayers() {
  const selectedPosition = playersDropdown.value;

  if (selectedPosition === "all") {
    displayPlayers(footballTeam.players);
    return;
  }

  const filteredPlayers = footballTeam.players.filter(
    player => player.position === selectedPosition
  );

  displayPlayers(filteredPlayers);
}

// Listen for dropdown changes
playersDropdown.addEventListener("change", filterPlayers);

// Initialize the application
displayTeamInformation();
displayPlayers(footballTeam.players);
