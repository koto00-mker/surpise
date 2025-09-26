// 🎶 Bouton musique
const bouton = document.getElementById("playMusique");
const musique = document.getElementById("maMusique");

if (bouton && musique) {
  bouton.addEventListener("click", () => {
    musique.play();
    bouton.style.display = "none";
    lancerConfettis(); // 🎉 démarre les confettis
  });
}

// 🎉 Confettis
function lancerConfettis() {
  for (let i = 0; i < 50; i++) {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.setProperty("--hue", Math.floor(Math.random() * 360));
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}
