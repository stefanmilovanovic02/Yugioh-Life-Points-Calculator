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
