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

/* Set Life Points
if (queryParams.lp) {
  const initialLifePoints = parseInt(queryParams.lp);
  document.getElementById("player1-life-points").textContent =
    initialLifePoints;
  document.getElementById("player2-life-points").textContent =
    initialLifePoints;
}
**/

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

// Držimo sve podatke o serijalima u jednom objektu
const seriesConfig = {
  dm: {
    lifePoints: 8000,
    animationClass: "dm-animation",
    sound: "Assets/Sounds/dm.lf.mp3",
    background: "Assets/Images/Life Points/dmlfbackground.webp",
  },
  gx: {
    lifePoints: 8000,
    animationClass: "gx-animation",
    sound: "Assets/Sounds/gx.lf.mp3",
  },
  Sds: {
    lifePoints: 8000,
    animationClass: "5ds-animation",
    sound: "Assets/Sounds/5ds.lf.mp3",
  },
  zexal: {
    lifePoints: 8000,
    animationClass: "zexal-animation",
    sound: "Assets/Sounds/zexal.lf.mp3",
  },
  arcv: {
    lifePoints: 8000,
    animationClass: "arcv-animation",
    sound: "Assets/Sounds/arcv.lf.mp3",
  },
  vrains: {
    lifePoints: 8000,
    animationClass: "vrains-animation",
    sound: "Assets/Sounds/vrains.lf.mp3",
  },
};

// Promenljiva za praćenje trenutnog serijala
let currentSeries = "dm";


// Funkcija za promenu serijala
function updateSeries() {
  const selectedSeries = document.getElementById("series-selector").value;

  const player1LifePoints = document.getElementById("player1-life-points");
  const player2LifePoints = document.getElementById("player2-life-points");

  // Resetovanje klasa
  player1LifePoints.className = "life-points";
  player2LifePoints.className = "life-points";

  // Dodavanje odgovarajućih klasa
  if (selectedSeries === "dm") {
    player1LifePoints.classList.add("dm-life-points", "dm-animation");
    player2LifePoints.classList.add("dm-life-points", "dm-animation");
  } else if (selectedSeries === "gx") {
    player1LifePoints.classList.add("gx-life-points", "gx-animation");
    player2LifePoints.classList.add("gx-life-points", "gx-animation");
  } else if (selectedSeries === "Sds") {
    player1LifePoints.classList.add("Sds-life-points", "Sds-animation");
    player2LifePoints.classList.add("Sds-life-points", "Sds-animation");
  } else if (selectedSeries === "zexal") {
    player1LifePoints.classList.add("zexal-life-points", "zexal-animation");
    player2LifePoints.classList.add("zexal-life-points", "zexal-animation");
  } else if (selectedSeries === "arcv") {
    player1LifePoints.classList.add("arcv-life-points", "arcv-animation");
    player2LifePoints.classList.add("arcv-life-points", "arcv-animation");
  } else if (selectedSeries === "vrains") {
    player1LifePoints.classList.add("vrains-life-points", "vrains-animation");
    player2LifePoints.classList.add("vrains-life-points", "vrains-animation");
  }
}



// Funkcija za promenu životnih poena i reprodukciju zvuka
function adjustLifePoints(player, change) {
  const lifePointsElement = document.getElementById(`${player}-life-points`);
  const progressBarFill = document.getElementById("gx-bar-fill");

  // Trenutni life poeni
  let currentPoints = parseInt(lifePointsElement.textContent);
  let newPoints = Math.max(0, currentPoints + change); // Osigurava da ne ode ispod 0

  // Određivanje brzine animacije
  const totalChange = Math.abs(change);
  let step = 1; // Podrazumevana promena po inkrementu
  if (totalChange >= 1000) {
    step = 20; // Brža animacija za velike promene
  } else if (totalChange >= 100) {
    step = 2; // Srednja brzina za promene srednje veličine
  }

  // Inkrement ili dekrement u zavisnosti od znaka promene
  const increment = Math.sign(change) * step;

  // Resetovanje animacije kako bi uvek radila
  lifePointsElement.classList.remove("pulse");
  void lifePointsElement.offsetWidth; // Forsira reflow za CSS animaciju
  lifePointsElement.classList.add("pulse");

// Reprodukcija zvuka za trenutni serijal
  const selectedSeries = document.getElementById("series-selector").value;
  const seriesSound = seriesConfig[selectedSeries]?.sound;

  if (seriesSound) {
    const audio = new Audio(seriesSound);
    audio.play();
  }


  // Animacija promene poena
  const animatePoints = () => {
    if (currentPoints !== newPoints) {
      currentPoints += increment;
      if ((increment > 0 && currentPoints > newPoints) || (increment < 0 && currentPoints < newPoints)) {
        currentPoints = newPoints; // Osigurava da ne pređe granicu
      }
      lifePointsElement.textContent = currentPoints;

      // Ažuriranje progress bara
      const percentage = (currentPoints / 8000) * 100;
      progressBarFill.style.width = `${percentage}%`;

      // Promena boje progress bara
      if (percentage > 50) {
        progressBarFill.style.backgroundColor = "green";
      } else if (percentage > 20) {
        progressBarFill.style.backgroundColor = "orange";
      } else {
        progressBarFill.style.backgroundColor = "red";
      }

      // Nastavi animaciju
      requestAnimationFrame(animatePoints);
    }
  };


  // Pokretanje animacije
  animatePoints();



    // Promena boje na osnovu nivoa
    if (percentage > 50) {
      progressBarFill.classList.add("high");
      progressBarFill.classList.remove("medium", "low");
    } else if (percentage > 20) {
      progressBarFill.classList.add("medium");
      progressBarFill.classList.remove("high", "low");
    } else {
      progressBarFill.classList.add("low");
      progressBarFill.classList.remove("high", "medium");
    }

  // Pokreni counter animaciju
  animateLifePointsCounter(lifePointsElement, newPoints);

  // Reprodukuj zvuk za trenutni serijal
  playLifePointChangeSound();

  // Dodaj animaciju za vizuelni efekat (osvetljenje ili slično)
  animateLifePoints(lifePointsElement);
}

// Funkcija za reprodukciju zvuka
function playLifePointChangeSound() {
  const soundPath = seriesConfig[currentSeries].sound;
  const sound = new Audio(soundPath);
  sound.play();
}

// Funkcija za animaciju životnih poena
function animateLifePoints(element) {
  const animationClass = seriesConfig[currentSeries].animationClass;
  element.classList.add(animationClass);
  setTimeout(() => element.classList.remove(animationClass), 500);
}

// Restart game function
function restartGame() {
  document.getElementById("player1-life-points").textContent = "8000";
  document.getElementById("player2-life-points").textContent = "8000";
}

// Roll dice function
function rollDice() {
  const result = Math.floor(Math.random() * 6) + 1; // Dice roll between 1 and 6
  alert(`You rolled a ${result}!`);
}

// Coin toss function
function coinToss() {
  const result = Math.random() < 0.5 ? "Heads" : "Tails";
  alert(`It's ${result}!`);
}


