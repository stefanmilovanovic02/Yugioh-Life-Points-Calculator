// Serial Script
// Fetch all characters from folder dynamically
const characters = [
  { name: "Adrian Gecko", img: "Assets/Images/Characters/GX/Adrian Gecko.png" },
  { name: "Alexis Rhodes", img: "Assets/Images/Characters/GX/Alexis Rhodes.png" },
  { name: "Amnael", img: "Assets/Images/Characters/GX/Amnael.png" },
  { name: "Aster Phoenix", img: "Assets/Images/Characters/GX/Aster Phoenix.png" },
  { name: "Atticus Rhodes", img: "Assets/Images/Characters/GX/Atticus Rhodes.png" },
  { name: "Axel Brodie", img: "Assets/Images/Characters/GX/Axel Brodie.png" },
  { name: "Bastion Misawa", img: "Assets/Images/Characters/GX/Bastion Misawa.png" },
  { name: "Blair Flannigan", img: "Assets/Images/Characters/GX/Blair Flannigan.png" },
  { name: "Camula", img: "Assets/Images/Characters/GX/Camula.png" },
  { name: "Chancellor Sheppard", img: "Assets/Images/Characters/GX/Chancellor Sheppard.png" },
  { name: "Chazz Princeton", img: "Assets/Images/Characters/GX/Chazz Princeton.png" },
  { name: "Chumley Huffington", img: "Assets/Images/Characters/GX/Chumley Huffington.png" },
  { name: "Dr. Vellian Crowler", img: "Assets/Images/Characters/GX/Dr. Vellian Crowler.png" },
  { name: "Jaden Yuki", img: "Assets/Images/Characters/GX/Jaden Yuki.png" },
  { name: "Jesse Anderson", img: "Assets/Images/Characters/GX/Jesse Anderson.png" },
  { name: "Jim Crocodile Cook", img: "Assets/Images/Characters/GX/Jim Crocodile Cook.png" },
  { name: "Kagemaru", img: "Assets/Images/Characters/GX/Kagemaru.png" },
  { name: "Marcel Bonaparte", img: "Assets/Images/Characters/GX/Marcel Bonaparte.png" },
  { name: "Nightshroud", img: "Assets/Images/Characters/GX/Nightshroud.png" },
  { name: "Sartorius Kumar", img: "Assets/Images/Characters/GX/Sartorius Kumar.png" },
  { name: "Syrus Truesdale", img: "Assets/Images/Characters/GX/Syrus Truesdale.png" },
  { name: "Tania", img: "Assets/Images/Characters/GX/Tania.png" },
  { name: "Thelonius Viper", img: "Assets/Images/Characters/GX/Thelonius Viper.png" },
  { name: "Titan", img: "Assets/Images/Characters/GX/Titan.png" },
  { name: "Tyranno Hassleberry", img: "Assets/Images/Characters/GX/Tyranno Hassleberry.png" },
  { name: "Yubel", img: "Assets/Images/Characters/GX/Yubel.png" },
  { name: "Zane Truesdale", img: "Assets/Images/Characters/GX/Zane Truesdale.png" },
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
        player1Image.src = `Assets/Images/Characters Org/GX/${character.name.replace(
          / /g,
          "_"
        )}.webp`;
        player1Image.style.display = "block";
        div.classList.add("selected");
      } else if (!player2 && player1 !== character) {
        // Postavljanje igrača 2
        player2 = character;
        player2Name.textContent = `P2: ${character.name}`;
        player2Image.src = `Assets/Images/Characters Org/GX/${character.name.replace(
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
