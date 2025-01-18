// Serial Script
// Fetch all characters from folder dynamically
const characters = [
  { name: "Aura", img: "Assets/Images/Characters/Arc V/Aura.png" },
  { name: "Celina", img: "Assets/Images/Characters/Arc V/Celina.png" },
  { name: "Declan", img: "Assets/Images/Characters/Arc V/Declan.png" },
  { name: "Dennis McField", img: "Assets/Images/Characters/Arc V/Dennis McField.png" },
  { name: "Dipper", img: "Assets/Images/Characters/Arc V/Dipper.png" },
  { name: "Gong", img: "Assets/Images/Characters/Arc V/Gong.png" },
  { name: "Julia", img: "Assets/Images/Characters/Arc V/Julia.png" },
  { name: "Kit", img: "Assets/Images/Characters/Arc V/Kit.png" },
  { name: "Moon Shadow", img: "Assets/Images/Characters/Arc V/Moon Shadow.png" },
  { name: "Officer 227", img: "Assets/Images/Characters/Arc V/Officer 227.png" },
  { name: "Shay Obsidian", img: "Assets/Images/Characters/Arc V/Shay Obsidian.png" },
  { name: "Sora", img: "Assets/Images/Characters/Arc V/Sora.png" },
  { name: "Sylvio", img: "Assets/Images/Characters/Arc V/Sylvio.png" },
  { name: "Yugo", img: "Assets/Images/Characters/Arc V/Yugo.png" },
  { name: "Yuto", img: "Assets/Images/Characters/Arc V/Yuto.png" },
  { name: "Yuya Sakaki", img: "Assets/Images/Characters/Arc V/Yuya Sakaki.png" },
  { name: "Zuzu", img: "Assets/Images/Characters/Arc V/Zuzu.png" },
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
        player1Image.src = `Assets/Images/Characters Org/ARC V/${character.name.replace(
          / /g,
          "_"
        )}.webp`;
        player1Image.style.display = "block";
        div.classList.add("selected");
      } else if (!player2 && player1 !== character) {
        // Postavljanje igrača 2
        player2 = character;
        player2Name.textContent = `P2: ${character.name}`;
        player2Image.src = `Assets/Images/Characters Org/ARC V/${character.name.replace(
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
