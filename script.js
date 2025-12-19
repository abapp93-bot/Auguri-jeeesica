const colors = ["#fbbf24", "#ef4444", "#22c55e", "#60a5fa", "#fde68a"];

function createConfetto() {
  const confetto = document.createElement("div");
  confetto.className = "confetto";

  const size = Math.random() * 6 + 6;
  confetto.style.width = size + "px";
  confetto.style.height = size * 1.4 + "px";

  confetto.style.left = Math.random() * 100 + "vw";
  confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetto.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.body.appendChild(confetto);

  setTimeout(() => confetto.remove(), 7000);
}

function confettiBurst(amount = 24) {
  for (let i = 0; i < amount; i++) {
    setTimeout(createConfetto, i * 80);
  }
}

// 🎄 AUTOMATICO ALL’APERTURA PAGINA
window.addEventListener("load", () => {
  confettiBurst(28);
});
