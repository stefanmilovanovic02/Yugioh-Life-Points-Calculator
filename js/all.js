// Serial Script
// Fetch all characters from folder dynamically
const characters = [
  { name: "Alister", img: "Assets/Images/Characters/DM/Alister.png" },
  { name: "Arkana", img: "Assets/Images/Characters/DM/Arkana.png" },
  { name: "Bandit Keith", img: "Assets/Images/Characters/DM/Bandit Keith.png" },
  { name: "Bonz", img: "Assets/Images/Characters/DM/Bonz.png" },
  { name: "Dartz", img: "Assets/Images/Characters/DM/Dartz.png" },
  {
    name: "Ishizu Ishtar",
    img: "Assets/Images/Characters/DM/Ishizu Ishtar.png",
  },
  { name: "Joey Wheeler", img: "Assets/Images/Characters/DM/Joey Wheeler.png" },
  {
    name: "Mai Valentine",
    img: "Assets/Images/Characters/DM/Mai Valentine.png",
  },
  { name: "Mako Tsunami", img: "Assets/Images/Characters/DM/Mako Tsunami.png" },
  {
    name: "Maximillion Pegasus",
    img: "Assets/Images/Characters/DM/Maximillion Pegasus.png",
  },
  { name: "Odion", img: "Assets/Images/Characters/DM/Odion.png" },
  { name: "PaniK", img: "Assets/Images/Characters/DM/PaniK.png" },
  { name: "Rafael", img: "Assets/Images/Characters/DM/Rafael.png" },
  { name: "Rex Raptor", img: "Assets/Images/Characters/DM/Rex Raptor.png" },
  { name: "Seeker", img: "Assets/Images/Characters/DM/Seeker.png" },
  { name: "Seto Kaiba", img: "Assets/Images/Characters/DM/Seto Kaiba.png" },
  { name: "Strings", img: "Assets/Images/Characters/DM/Strings.png" },
  { name: "Tea Gardner", img: "Assets/Images/Characters/DM/Tea Gardner.png" },
  { name: "Valon", img: "Assets/Images/Characters/DM/Valon.png" },
  {
    name: "Weevil Underwood",
    img: "Assets/Images/Characters/DM/Weevil Underwood.png",
  },
  { name: "Yami Bakura", img: "Assets/Images/Characters/DM/Yami Bakura.png" },
  { name: "Yami Marik", img: "Assets/Images/Characters/DM/Yami Marik.png" },
  { name: "Yami Yugi", img: "Assets/Images/Characters/DM/Yami Yugi.png" },
  { name: "Yugi Muto", img: "Assets/Images/Characters/DM/Yugi Muto.png" },
  { name: "Adrian Gecko", img: "Assets/Images/Characters/GX/Adrian Gecko.png" },
  {
    name: "Alexis Rhodes",
    img: "Assets/Images/Characters/GX/Alexis Rhodes.png",
  },
  { name: "Amnael", img: "Assets/Images/Characters/GX/Amnael.png" },
  {
    name: "Aster Phoenix",
    img: "Assets/Images/Characters/GX/Aster Phoenix.png",
  },
  {
    name: "Atticus Rhodes",
    img: "Assets/Images/Characters/GX/Atticus Rhodes.png",
  },
  { name: "Axel Brodie", img: "Assets/Images/Characters/GX/Axel Brodie.png" },
  {
    name: "Bastion Misawa",
    img: "Assets/Images/Characters/GX/Bastion Misawa.png",
  },
  {
    name: "Blair Flannigan",
    img: "Assets/Images/Characters/GX/Blair Flannigan.png",
  },
  { name: "Camula", img: "Assets/Images/Characters/GX/Camula.png" },
  {
    name: "Chancellor Sheppard",
    img: "Assets/Images/Characters/GX/Chancellor Sheppard.png",
  },
  {
    name: "Chazz Princeton",
    img: "Assets/Images/Characters/GX/Chazz Princeton.png",
  },
  {
    name: "Chumley Huffington",
    img: "Assets/Images/Characters/GX/Chumley Huffington.png",
  },
  {
    name: "Dr. Vellian Crowler",
    img: "Assets/Images/Characters/GX/Dr. Vellian Crowler.png",
  },
  { name: "Jaden Yuki", img: "Assets/Images/Characters/GX/Jaden Yuki.png" },
  {
    name: "Jesse Anderson",
    img: "Assets/Images/Characters/GX/Jesse Anderson.png",
  },
  {
    name: "Jim Crocodile Cook",
    img: "Assets/Images/Characters/GX/Jim Crocodile Cook.png",
  },
  { name: "Kagemaru", img: "Assets/Images/Characters/GX/Kagemaru.png" },
  {
    name: "Marcel Bonaparte",
    img: "Assets/Images/Characters/GX/Marcel Bonaparte.png",
  },
  { name: "Nightshroud", img: "Assets/Images/Characters/GX/Nightshroud.png" },
  {
    name: "Sartorius Kumar",
    img: "Assets/Images/Characters/GX/Sartorius Kumar.png",
  },
  {
    name: "Syrus Truesdale",
    img: "Assets/Images/Characters/GX/Syrus Truesdale.png",
  },
  { name: "Tania", img: "Assets/Images/Characters/GX/Tania.png" },
  {
    name: "Thelonius Viper",
    img: "Assets/Images/Characters/GX/Thelonius Viper.png",
  },
  { name: "Titan", img: "Assets/Images/Characters/GX/Titan.png" },
  {
    name: "Tyranno Hassleberry",
    img: "Assets/Images/Characters/GX/Tyranno Hassleberry.png",
  },
  { name: "Yubel", img: "Assets/Images/Characters/GX/Yubel.png" },
  {
    name: "Zane Truesdale",
    img: "Assets/Images/Characters/GX/Zane Truesdale.png",
  },
  {
    name: "Akiza Izinski",
    img: "Assets/Images/Characters/5Ds/Akiza Izinski.png",
  },
  { name: "Andre", img: "Assets/Images/Characters/5Ds/Andre.png" },
  { name: "Antinomy", img: "Assets/Images/Characters/5Ds/Antinomy.png" },
  { name: "Aporia", img: "Assets/Images/Characters/5Ds/Aporia.png" },
  { name: "Bolt Tanner", img: "Assets/Images/Characters/5Ds/Bolt Tanner.png" },
  { name: "Bruno", img: "Assets/Images/Characters/5Ds/Bruno.png" },
  {
    name: "Carly Carmine",
    img: "Assets/Images/Characters/5Ds/Carly Carmine.png",
  },
  { name: "Crow Hogan", img: "Assets/Images/Characters/5Ds/Crow Hogan.png" },
  { name: "Jean", img: "Assets/Images/Characters/5Ds/Jean.png" },
  { name: "Jack Atlas", img: "Assets/Images/Characters/5Ds/Jack Atlas.png" },
  {
    name: "Kalin Kessler",
    img: "Assets/Images/Characters/5Ds/Kalin Kessler.png",
  },
  { name: "Lazar", img: "Assets/Images/Characters/5Ds/Lazar.png" },
  { name: "Leo", img: "Assets/Images/Characters/5Ds/Leo.png" },
  { name: "Luna", img: "Assets/Images/Characters/5Ds/Luna.png" },
  { name: "Mist Valley", img: "Assets/Images/Characters/5Ds/Mist Valley.png" },
  { name: "Rex Goodwin", img: "Assets/Images/Characters/5Ds/Rex Goodwin.png" },
  {
    name: "Sherry LeBlanc",
    img: "Assets/Images/Characters/5Ds/Sherry LeBlanc.png",
  },
  { name: "Trudge", img: "Assets/Images/Characters/5Ds/Trudge.png" },
  { name: "Yusei Fudo", img: "Assets/Images/Characters/5Ds/Yusei Fudo.png" },
  { name: "ZOne", img: "Assets/Images/Characters/5Ds/ZOne.png" },
  {
    name: "Alito Barian",
    img: "Assets/Images/Characters/Zexal/Alito Barian.png",
  },
  {
    name: "Anna Kaboom",
    img: "Assets/Images/Characters/Zexal/Anna Kaboom.png",
  },
  { name: "Astral", img: "Assets/Images/Characters/Zexal/Astral.png" },
  {
    name: "Bronk Stone",
    img: "Assets/Images/Characters/Zexal/Bronk Stone.png",
  },
  {
    name: "Cathy Katherine",
    img: "Assets/Images/Characters/Zexal/Cathy Katherine.png",
  },
  { name: "Dextra", img: "Assets/Images/Characters/Zexal/Dextra.png" },
  { name: "Dr. Faker", img: "Assets/Images/Characters/Zexal/Dr. Faker.png" },
  {
    name: "Dumon Barian",
    img: "Assets/Images/Characters/Zexal/Dumon Barian.png",
  },
  { name: "Gauche", img: "Assets/Images/Characters/Zexal/Gauche.png" },
  { name: "Giray Yuda", img: "Assets/Images/Characters/Zexal/Giray Yuda.png" },
  {
    name: "Girag Barian",
    img: "Assets/Images/Characters/Zexal/Girag Barian.png",
  },
  { name: "Kite Tenjo", img: "Assets/Images/Characters/Zexal/Kite Tenjo.png" },
  { name: "Mizar", img: "Assets/Images/Characters/Zexal/Mizar.png" },
  { name: "Quattro", img: "Assets/Images/Characters/Zexal/Quattro.png" },
  { name: "Rio Kastle", img: "Assets/Images/Characters/Zexal/Rio Kastle.png" },
  {
    name: "Shark Kastle",
    img: "Assets/Images/Characters/Zexal/Shark Kastle.png",
  },
  {
    name: "Tori Meadows",
    img: "Assets/Images/Characters/Zexal/Tori Meadows.png",
  },
  { name: "Trey", img: "Assets/Images/Characters/Zexal/Trey.png" },
  {
    name: "Vector Barian",
    img: "Assets/Images/Characters/Zexal/Vector Barian.png",
  },
  {
    name: "Yuma Tsukumo",
    img: "Assets/Images/Characters/Zexal/Yuma Tsukumo.png",
  },
  {
    name: "Alito Barian",
    img: "Assets/Images/Characters/Zexal/Alito Barian.png",
  },
  {
    name: "Anna Kaboom",
    img: "Assets/Images/Characters/Zexal/Anna Kaboom.png",
  },
  { name: "Astral", img: "Assets/Images/Characters/Zexal/Astral.png" },
  {
    name: "Bronk Stone",
    img: "Assets/Images/Characters/Zexal/Bronk Stone.png",
  },
  {
    name: "Cathy Katherine",
    img: "Assets/Images/Characters/Zexal/Cathy Katherine.png",
  },
  { name: "Dextra", img: "Assets/Images/Characters/Zexal/Dextra.png" },
  { name: "Dr. Faker", img: "Assets/Images/Characters/Zexal/Dr. Faker.png" },
  {
    name: "Dumon Barian",
    img: "Assets/Images/Characters/Zexal/Dumon Barian.png",
  },
  { name: "Gauche", img: "Assets/Images/Characters/Zexal/Gauche.png" },
  { name: "Giray Yuda", img: "Assets/Images/Characters/Zexal/Giray Yuda.png" },
  {
    name: "Girag Barian",
    img: "Assets/Images/Characters/Zexal/Girag Barian.png",
  },
  { name: "Kite Tenjo", img: "Assets/Images/Characters/Zexal/Kite Tenjo.png" },
  { name: "Mizar", img: "Assets/Images/Characters/Zexal/Mizar.png" },
  { name: "Quattro", img: "Assets/Images/Characters/Zexal/Quattro.png" },
  { name: "Rio Kastle", img: "Assets/Images/Characters/Zexal/Rio Kastle.png" },
  {
    name: "Shark Kastle",
    img: "Assets/Images/Characters/Zexal/Shark Kastle.png",
  },
  {
    name: "Tori Meadows",
    img: "Assets/Images/Characters/Zexal/Tori Meadows.png",
  },
  { name: "Trey", img: "Assets/Images/Characters/Zexal/Trey.png" },
  {
    name: "Vector Barian",
    img: "Assets/Images/Characters/Zexal/Vector Barian.png",
  },
  {
    name: "Yuma Tsukumo",
    img: "Assets/Images/Characters/Zexal/Yuma Tsukumo.png",
  },
  { name: "Aura", img: "Assets/Images/Characters/Arc V/Aura.png" },
  { name: "Celina", img: "Assets/Images/Characters/Arc V/Celina.png" },
  { name: "Declan", img: "Assets/Images/Characters/Arc V/Declan.png" },
  {
    name: "Dennis McField",
    img: "Assets/Images/Characters/Arc V/Dennis McField.png",
  },
  { name: "Dipper", img: "Assets/Images/Characters/Arc V/Dipper.png" },
  { name: "Gong", img: "Assets/Images/Characters/Arc V/Gong.png" },
  { name: "Julia", img: "Assets/Images/Characters/Arc V/Julia.png" },
  { name: "Kit", img: "Assets/Images/Characters/Arc V/Kit.png" },
  {
    name: "Moon Shadow",
    img: "Assets/Images/Characters/Arc V/Moon Shadow.png",
  },
  {
    name: "Officer 227",
    img: "Assets/Images/Characters/Arc V/Officer 227.png",
  },
  {  name: "Shay Obsidian", img: "Assets/Images/Characters/Arc V/Shay Obsidian.png" },
  { name: "Sora", img: "Assets/Images/Characters/Arc V/Sora.png" },
  { name: "Sylvio", img: "Assets/Images/Characters/Arc V/Sylvio.png" },
  { name: "Yugo", img: "Assets/Images/Characters/Arc V/Yugo.png" },
  { name: "Yuto", img: "Assets/Images/Characters/Arc V/Yuto.png" },
  { name: "Yuya Sakaki", img: "Assets/Images/Characters/Arc V/Yuya Sakaki.png"},
  { name: "Zuzu", img: "Assets/Images/Characters/Arc V/Zuzu.png" },
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
        player1Image.src = `Assets/Images/Characters Org/ALL/${character.name.replace(
          / /g,
          "_"
        )}.webp`;
        player1Image.style.display = "block";
        div.classList.add("selected");
      } else if (!player2 && player1 !== character) {
        // Postavljanje igrača 2
        player2 = character;
        player2Name.textContent = `P2: ${character.name}`;
        player2Image.src = `Assets/Images/Characters Org/ALL/${character.name.replace(
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
