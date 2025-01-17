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
                div.innerHTML = `<img src="${character.img}" alt="${character.name}"><br>${character.name}`;

                div.addEventListener("click", () => {
                    if (!player1) {
                        // Postavljanje igrača 1
                        player1 = character;
                        player1Name.textContent = `P1: ${character.name}`;
                        player1Image.src = `Assets/Images/Characters Org/DM/${character.name.replace(/ /g, "_")}.webp`;
                        player1Image.style.display = "block";
                        div.classList.add("selected");
                    } else if (!player2 && player1 !== character) {
                        // Postavljanje igrača 2
                        player2 = character;
                        player2Name.textContent = `P2: ${character.name}`;
                        player2Image.src = `Assets/Images/Characters Org/DM/${character.name.replace(/ /g, "_")}.webp`;
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
