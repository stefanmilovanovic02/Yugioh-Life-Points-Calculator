// Serial Script
// Fetch all characters from folder dynamically
const characters = [
  { name: "Alito Barian", img: "Assets/Images/Characters/Zexal/Alito Barian.png" },
  { name: "Anna Kaboom", img: "Assets/Images/Characters/Zexal/Anna Kaboom.png" },
  { name: "Astral", img: "Assets/Images/Characters/Zexal/Astral.png" },
  { name: "Bronk Stone", img: "Assets/Images/Characters/Zexal/Bronk Stone.png" },
  { name: "Cathy Katherine", img: "Assets/Images/Characters/Zexal/Cathy Katherine.png" },
  { name: "Dextra", img: "Assets/Images/Characters/Zexal/Dextra.png" },
  { name: "Don Thousand", img: "Assets/Images/Characters/Zexal/Don Thousand.png" },
  { name: "Dr. Faker", img: "Assets/Images/Characters/Zexal/Dr.Faker.png" },
  { name: "Dumon Barian", img: "Assets/Images/Characters/Zexal/Dumon Barian.png" },
  { name: "Flip Turner", img: "Assets/Images/Characters/Zexal/Flip Turner.png" },
  { name: "Girag Barian", img: "Assets/Images/Characters/Zexal/Girag Barian.png" },
  { name: "Kite Tenjo", img: "Assets/Images/Characters/Zexal/Kite Tenjo.png" },
  { name: "Mizar Barian", img: "Assets/Images/Characters/Zexal/Mizar Barian.png" },
  { name: "Nash", img: "Assets/Images/Characters/Zexal/Nash.png" },
  { name: "Nelson Andrews", img: "Assets/Images/Characters/Zexal/Nelson Andrews.png" },
  { name: "Nistro", img: "Assets/Images/Characters/Zexal/Nistro.png" },
  { name: "Number 96", img: "Assets/Images/Characters/Zexal/Number 96.png" },
  { name: "Quattro", img: "Assets/Images/Characters/Zexal/Quattro.png" },
  { name: "Quinton", img: "Assets/Images/Characters/Zexal/Quinton.png" },
  { name: "Ray Shadows", img: "Assets/Images/Characters/Zexal/Ray Shadows.png" },
  { name: "Reginald Kastle", img: "Assets/Images/Characters/Zexal/Reginald Kastle.png" },
  { name: "Rio Kastle", img: "Assets/Images/Characters/Zexal/Rio Kastle.png" },
  { name: "Trey", img: "Assets/Images/Characters/Zexal/Trey.png" },
  { name: "Vector", img: "Assets/Images/Characters/Zexal/Vector.png" },
  { name: "Yuma Tsukumo", img: "Assets/Images/Characters/Zexal/Yuma Tsukumo.png" },
  { name: "Zexal", img: "Assets/Images/Characters/Zexal/Zexal.png" },
  { name: "Zexal 3", img: "Assets/Images/Characters/Zexal/Zexal 3.png" },
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
        player1Image.src = `Assets/Images/Characters Org/ZEXAL/${character.name.replace(
          / /g,
          "_"
        )}.webp`;
        player1Image.style.display = "block";
        div.classList.add("selected");
      } else if (!player2 && player1 !== character) {
        // Postavljanje igrača 2
        player2 = character;
        player2Name.textContent = `P2: ${character.name}`;
        player2Image.src = `Assets/Images/Characters Org/ZEXAL/${character.name.replace(
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
