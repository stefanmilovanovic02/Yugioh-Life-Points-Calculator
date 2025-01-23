// Helper function to get query parameters
function getQueryParams() {
  const params = {};
  const queryString = window.location.search.slice(1);
  queryString.split("&").forEach((param) => {
    const [key, value] = param.split("=");
    params[decodeURIComponent(key)] = decodeURIComponent(value);
  });
  return params;
}

// Get all query parameters
const queryParams = getQueryParams();

// Set Life Points
if (queryParams.lp) {
  const initialLifePoints = parseInt(queryParams.lp);
  document.getElementById("player1-life-points").textContent =
    initialLifePoints;
  document.getElementById("player2-life-points").textContent =
    initialLifePoints;
}

// Timer Logic
if (queryParams.timer) {
  let timerValue = parseInt(queryParams.timer);
  const timerElement = document.getElementById("timer");

  const updateTimer = () => {
    if (timerValue > 0) {
      const minutes = Math.floor(timerValue / 60);
      const seconds = timerValue % 60;
      timerElement.textContent = `${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      timerValue--;
    } else {
      clearInterval(timerInterval);
      alert("Time's up!");
    }
  };

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
}

// Set player images if provided in query parameters
if (queryParams.p1Img && queryParams.p2Img) {
  document.getElementById("player1-image").src = queryParams.p1Img;
  document.getElementById("player1-image").style.display = "block";

  document.getElementById("player2-image").src = queryParams.p2Img;
  document.getElementById("player2-image").style.display = "block";
}

// Life Points Adjustment
function adjustLifePoints(player, value) {
  const lifePointsElement = document.getElementById(`${player}-life-points`);
  let currentLifePoints = parseInt(lifePointsElement.textContent);
  currentLifePoints += value;
  lifePointsElement.textContent = Math.max(currentLifePoints, 0);
}

// Restart Game
function restartGame() {
  const initialLifePoints = queryParams.lp ? parseInt(queryParams.lp) : 2000;
  document.getElementById("player1-life-points").textContent =
    initialLifePoints;
  document.getElementById("player2-life-points").textContent =
    initialLifePoints;

  if (queryParams.timer) {
    location.reload(); // Reset the timer by reloading the page
  }
}

// Roll Dice
function rollDice() {
  const diceResult = Math.floor(Math.random() * 6) + 1;
  alert(`Dice Roll: ${diceResult}`);
}

// Coin Toss
function coinToss() {
  const tossResult = Math.random() < 0.5 ? "Heads" : "Tails";
  alert(`Coin Toss: ${tossResult}`);
}


/**
 * evo ti sva 3 fajla pa ti dodaj sta gde treba
script.js (dm skripta)
// Add click event to redirect to the correct page
document.querySelectorAll(".series").forEach((series) => {
  series.addEventListener("click", () => {
    const link = series.getAttribute("data-link");
    window.location.href = link;
  });
});


// Serial Script
  // Fetch all characters from folder dynamically
        const characters = [
          { name: "Alister", img: "Assets/Images/Characters/DM/Alister.png" },
          { name: "Arkana", img: "Assets/Images/Characters/DM/Arkana.png" },
          { name: "Bandit Keith", img: "Assets/Images/Characters/DM/Bandit Keith.png" },
          { name: "Bonz", img: "Assets/Images/Characters/DM/Bonz.png" },
          { name: "Dartz", img: "Assets/Images/Characters/DM/Dartz.png" },
          { name: "Ishizu Ishtar", img: "Assets/Images/Characters/DM/Ishizu Ishtar.png" },
          { name: "Joey Wheeler", img: "Assets/Images/Characters/DM/Joey Wheeler.png" },
          { name: "Mai Valentine", img: "Assets/Images/Characters/DM/Mai Valentine.png" },
          { name: "Mako Tsunami", img: "Assets/Images/Characters/DM/Mako Tsunami.png" },
          { name: "Maximillion Pegasus", img: "Assets/Images/Characters/DM/Maximillion Pegasus.png" },
          { name: "Odion", img: "Assets/Images/Characters/DM/Odion.png" },
          { name: "PaniK", img: "Assets/Images/Characters/DM/PaniK.png" },
          { name: "Rafael", img: "Assets/Images/Characters/DM/Rafael.png" },
          { name: "Rex Raptor", img: "Assets/Images/Characters/DM/Rex Raptor.png" },
          { name: "Seeker", img: "Assets/Images/Characters/DM/Seeker.png" },
          { name: "Seto Kaiba", img: "Assets/Images/Characters/DM/Seto Kaiba.png" },
          { name: "Strings", img: "Assets/Images/Characters/DM/Strings.png" },
          { name: "Tea Gardner", img: "Assets/Images/Characters/DM/Tea Gardner.png" },
          { name: "Valon", img: "Assets/Images/Characters/DM/Valon.png" },
          { name: "Weevil Underwood", img: "Assets/Images/Characters/DM/Weevil Underwood.png" },
          { name: "Yami Bakura", img: "Assets/Images/Characters/DM/Yami Bakura.png" },
          { name: "Yami Marik", img: "Assets/Images/Characters/DM/Yami Marik.png" },
          { name: "Yami Yugi", img: "Assets/Images/Characters/DM/Yami Yugi.png" },
          { name: "Yugi Muto", img: "Assets/Images/Characters/DM/Yugi Muto.png" },
        ];

        const characterGrid = document.getElementById("character-grid");
        const player1Name = document.getElementById("player1-name");
        const player1Image = document.getElementById("player1-image");
        const player2Name = document.getElementById("player2-name");
        const player2Image = document.getElementById("player2-image");

        let player1 = null;
        let player2 = null;

        function renderCharacters() {
            characters.forEach((character) => {
                const div = document.createElement("div");
                div.classList.add("character");
                div.innerHTML = <img src="${character.img}" alt="${character.name}"><br>${character.name};

                div.addEventListener("click", () => {
                    if (!player1) {
                        // Postavljanje igrača 1
                        player1 = character;
                        player1Name.textContent = P1: ${character.name};
                        player1Image.src = Assets/Images/Characters Org/DM/${character.name.replace(/ /g, "_")}.webp;
                        player1Image.style.display = "block";
                        div.classList.add("selected");
                    } else if (!player2 && player1 !== character) {
                        // Postavljanje igrača 2
                        player2 = character;
                        player2Name.textContent = P2: ${character.name};
                        player2Image.src = Assets/Images/Characters Org/DM/${character.name.replace(/ /g, "_")}.webp;
                        player2Image.style.display = "block";
                        div.classList.add("selected");
                    } else {
                        // Uklanjanje selektovanog igrača
                        if (player1 === character) {
                            player1 = null;
                            player1Name.textContent = "P1: None";
                            player1Image.style.display = "none";
                            div.classList.remove("selected");
                        } else if (player2 === character) {
                            player2 = null;
                            player2Name.textContent = "P2: None";
                            player2Image.style.display = "none";
                            div.classList.remove("selected");
                        }
                    }
                });

                characterGrid.appendChild(div);
            });
        }

        renderCharacters();

        // Start button logic
        document.getElementById("start-button").addEventListener("click", () => {
            const lifePoints = document.getElementById("life-points").value;
            const series = document.getElementById("series").value;
            const timer = document.getElementById("timer").value;

            if (!player1 || !player2) {
                alert("Please select both players before starting!");
                return;
            }

            // Dodavanje igrača u query string
            const url = calculator.html?lp=${lifePoints}&series=${series}&timer=${timer}&p1Name=${encodeURIComponent(player1.name)}&p1Img=${encodeURIComponent(player1.img)}&p2Name=${encodeURIComponent(player2.name)}&p2Img=${encodeURIComponent(player2.img)};
            window.location.href = url;
        });

        // Reset button logic
        document.getElementById("reset-button").addEventListener("click", () => {
            player1 = null;
            player2 = null;
            player1Name.textContent = "P1: None";
            player2Name.textContent = "P2: None";
            player1Image.style.display = "none";
            player2Image.style.display = "none";

            // Remove selected classes
            document.querySelectorAll(".character").forEach((char) => {
                char.classList.remove("selected");
            });
        });

calculator.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
  <link rel="stylesheet" href="calculator.css">
</head>
<body>
  <div class="calculator-container">
    <!-- Player 1 Section -->
    <div class="player-section">
      <img id="player1-image" class="character-image" style="display: none;" alt="Player 1">
      <div id="player1-life-points" class="life-points">2000</div>
      <div class="buttons">
        <button onclick="adjustLifePoints('player1', -50)">- 50</button>
        <button onclick="adjustLifePoints('player1', -100)">- 100</button>
        <button onclick="adjustLifePoints('player1', -1000)">- 1000</button>
        <button onclick="adjustLifePoints('player1', 50)">+ 50</button>
        <button onclick="adjustLifePoints('player1', 100)">+ 100</button>
        <button onclick="adjustLifePoints('player1', 1000)">+ 1000</button>
      </div>
    </div>

    <!-- Controls Section -->
    <div class="controls">
      <button onclick="restartGame()">Restart</button>
      <button onclick="rollDice()">Roll Dice</button>
      <button onclick="coinToss()">Coin Toss</button>
      <div id="timer">00:00</div>
    </div>

    <!-- Player 2 Section -->
    <div class="player-section">
      <img id="player2-image" style="display: none;" alt="Player 2">
      <div id="player2-life-points" class="life-points">2000</div>
      <div class="buttons">
        <button onclick="adjustLifePoints('player2', -50)">- 50</button>
        <button onclick="adjustLifePoints('player2', -100)">- 100</button>
        <button onclick="adjustLifePoints('player2', -1000)">- 1000</button>
        <button onclick="adjustLifePoints('player2', 50)">+ 50</button>
        <button onclick="adjustLifePoints('player2', 100)">+ 100</button>
        <button onclick="adjustLifePoints('player2', 1000)">+ 1000</button>
      </div>
    </div>
  </div>

  <script src="js/calculator.js"></script>
</body>
</html>

calculator.js
// Helper function to get query parameters
function getQueryParams() {
  const params = {};
  const queryString = window.location.search.slice(1);
  queryString.split("&").forEach((param) => {
    const [key, value] = param.split("=");
    params[decodeURIComponent(key)] = decodeURIComponent(value);
  });
  return params;
}

// Get all query parameters
const queryParams = getQueryParams();

// Set Life Points
if (queryParams.lp) {
  const initialLifePoints = parseInt(queryParams.lp);
  document.getElementById("player1-life-points").textContent =
    initialLifePoints;
  document.getElementById("player2-life-points").textContent =
    initialLifePoints;
}

// Timer Logic
if (queryParams.timer) {
  let timerValue = parseInt(queryParams.timer);
  const timerElement = document.getElementById("timer");

  const updateTimer = () => {
    if (timerValue > 0) {
      const minutes = Math.floor(timerValue / 60);
      const seconds = timerValue % 60;
      timerElement.textContent = ${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")};
      timerValue--;
    } else {
      clearInterval(timerInterval);
      alert("Time's up!");
    }
  };

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
}

// Set player images if provided in query parameters
if (queryParams.p1Img && queryParams.p2Img) {
  document.getElementById("player1-image").src = queryParams.p1Img;
  document.getElementById("player1-image").style.display = "block";

  document.getElementById("player2-image").src = queryParams.p2Img;
  document.getElementById("player2-image").style.display = "block";
}

// Life Points Adjustment
function adjustLifePoints(player, value) {
  const lifePointsElement = document.getElementById(${player}-life-points);
  let currentLifePoints = parseInt(lifePointsElement.textContent);
  currentLifePoints += value;
  lifePointsElement.textContent = Math.max(currentLifePoints, 0);
}

// Restart Game
function restartGame() {
  const initialLifePoints = queryParams.lp ? parseInt(queryParams.lp) : 2000;
  document.getElementById("player1-life-points").textContent =
    initialLifePoints;
  document.getElementById("player2-life-points").textContent =
    initialLifePoints;

  if (queryParams.timer) {
    location.reload(); // Reset the timer by reloading the page
  }
}

// Roll Dice
function rollDice() {
  const diceResult = Math.floor(Math.random() * 6) + 1;
  alert(Dice Roll: ${diceResult});
}

// Coin Toss
function coinToss() {
  const tossResult = Math.random() < 0.5 ? "Heads" : "Tails";
  alert(Coin Toss: ${tossResult});
}

Jedino sto zelim da ti napomenem jestee da trenutni fajlovi sa kodovima su oke nemoj da ih menjas drasticno samo dodaj te stvari koje trebaju
 */