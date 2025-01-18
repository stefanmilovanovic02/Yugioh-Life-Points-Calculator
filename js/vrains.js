// Serial Script
// Fetch all characters from folder dynamically
const characters = [
  { name: "AI", img: "Assets/Images/Characters/Vrains/AI.png" },
  { name: "Akira Zaizen", img: "Assets/Images/Characters/Vrains/Akira Zaizen.png" },
  { name: "Blue Angel", img: "Assets/Images/Characters/Vrains/Blue Angel.png" },
  { name: "Blue Gal", img: "Assets/Images/Characters/Vrains/Blue Gal.png" },
  { name: "Blue Maiden", img: "Assets/Images/Characters/Vrains/Blue Maiden.png" },
  { name: "Bohman", img: "Assets/Images/Characters/Vrains/Bohman.png" },
  { name: "Ghost Gal", img: "Assets/Images/Characters/Vrains/Ghost Gal.png" },
  { name: "Knight of Hanoi", img: "Assets/Images/Characters/Vrains/Knight of Hanoi.png" },
  { name: "Lightning", img: "Assets/Images/Characters/Vrains/Lightning.png" },
  { name: "Playmaker", img: "Assets/Images/Characters/Vrains/Playmaker.png" },
  { name: "Roboppi", img: "Assets/Images/Characters/Vrains/Roboppi.png" },
  { name: "Soulburner", img: "Assets/Images/Characters/Vrains/Soulburner.png" },
  { name: "Spectre", img: "Assets/Images/Characters/Vrains/Spectre.png" },
  { name: "The Gore", img: "Assets/Images/Characters/Vrains/The Gore.png" },
  { name: "The Shepherd", img: "Assets/Images/Characters/Vrains/The Shepherd.png" },
  { name: "Varis", img: "Assets/Images/Characters/Vrains/Varis.png" },
  { name: "Windy", img: "Assets/Images/Characters/Vrains/Windy.png" },
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
        player1Image.src = `Assets/Images/Characters Org/VRAINS/${character.name.replace(
          / /g,
          "_"
        )}.webp`;
        player1Image.style.display = "block";
        div.classList.add("selected");
      } else if (!player2 && player1 !== character) {
        // Postavljanje igrača 2
        player2 = character;
        player2Name.textContent = `P2: ${character.name}`;
        player2Image.src = `Assets/Images/Characters Org/VRAINS/${character.name.replace(
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
