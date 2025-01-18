// Serial Script
// Fetch all characters from folder dynamically
const characters = [
  { name: "Akiza Izinski", img: "Assets/Images/Characters/5DS/Akiza Izinski.png" },
  { name: "Andre", img: "Assets/Images/Characters/5DS/Andre.png" },
  { name: "Antinomy", img: "Assets/Images/Characters/5DS/Antinomy.png" },
  { name: "Aporia", img: "Assets/Images/Characters/5DS/Aporia.png" },
  { name: "Bolt Tanner", img: "Assets/Images/Characters/5DS/Bolt Tanner.png" },
  { name: "Breo", img: "Assets/Images/Characters/5DS/Breo.png" },
  { name: "Broder", img: "Assets/Images/Characters/5DS/Broder.png" },
  { name: "Carly Carmine", img: "Assets/Images/Characters/5DS/Carly Carmine.png" },
  { name: "Crow Hogan", img: "Assets/Images/Characters/5DS/Crow Hogan.png" },
  { name: "Devack", img: "Assets/Images/Characters/5DS/Devack.png" },
  { name: "Dragan", img: "Assets/Images/Characters/5DS/Dragan.png" },
  { name: "Greiger", img: "Assets/Images/Characters/5DS/Greiger.png" },
  { name: "Halldor", img: "Assets/Images/Characters/5DS/Halldor.png" },
  { name: "Hunter Pace", img: "Assets/Images/Characters/5DS/Hunter Pace.png" },
  { name: "Jack Atlas", img: "Assets/Images/Characters/5DS/Jack Atlas.png" },
  { name: "Jean", img: "Assets/Images/Characters/5DS/Jean.png" },
  { name: "Kalin Keesler", img: "Assets/Images/Characters/5DS/Kalin Keesler.png" },
  { name: "Leo", img: "Assets/Images/Characters/5DS/Leo.png" },
  { name: "Lester", img: "Assets/Images/Characters/5DS/Lester.png" },
  { name: "Misty tredwell", img: "Assets/Images/Characters/5DS/Misty Tredwell.png" },
  { name: "Mr Armstrong", img: "Assets/Images/Characters/5DS/Mr Armstrong.png" },
  { name: "Primo", img: "Assets/Images/Characters/5DS/Primo.png" },
  { name: "Rex Goodwin", img: "Assets/Images/Characters/5DS/Rex Goodwin.png" },
  { name: "Roman Goodwin", img: "Assets/Images/Characters/5DS/Roman Goodwin.png" },
  { name: "Sayer", img: "Assets/Images/Characters/5DS/Sayer.png" },
  { name: "Sherry LeBlanc", img: "Assets/Images/Characters/5DS/Sherry LeBlanc.png" },
  { name: "Tetsu Trudge", img: "Assets/Images/Characters/5DS/Tetsu Trudge.png" },
  { name: "Yusei Fudo", img: "Assets/Images/Characters/5DS/Yusei Fudo.png" },
  { name: "Zone", img: "Assets/Images/Characters/5DS/Zone.png" },
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
    div.innerHTML = `<img src="${character.img}" alt="${character.name}"><br>${character.name}`;

    div.addEventListener("click", () => {
      if (!player1) {
        // Postavljanje igrača 1
        player1 = character;
        player1Name.textContent = `P1: ${character.name}`;
        player1Image.src = `Assets/Images/Characters Org/5DS/${character.name.replace(
          / /g,
          "_"
        )}.webp`;
        player1Image.style.display = "block";
        div.classList.add("selected");
      } else if (!player2 && player1 !== character) {
        // Postavljanje igrača 2
        player2 = character;
        player2Name.textContent = `P2: ${character.name}`;
        player2Image.src = `Assets/Images/Characters Org/5DS/${character.name.replace(
          / /g,
          "_"
        )}.webp`;
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

  // Redirect to calculator page with settings passed as query params
  const url = `calculator.html?lp=${lifePoints}&series=${series}&timer=${timer}`;
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
