const COLORS = ["#fbbf24", "#ef4444", "#22c55e", "#60a5fa", "#fde68a"];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function createConfetto() {
  const d = document.createElement("div");
  d.className = "confetto";

  const size = rand(6, 12);
  d.style.width = `${size}px`;
  d.style.height = `${size * 1.35}px`;
  d.style.left = `${rand(0, 100)}vw`;
  d.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
  d.style.animationDuration = `${rand(3.2, 6.2)}s`;
  d.style.transform = `rotate(${rand(0, 180)}deg)`;

  document.body.appendChild(d);
  setTimeout(() => d.remove(), 8000);
}

function confettiBurst(amount = 24) {
  for (let i = 0; i < amount; i++) {
    setTimeout(createConfetto, i * 70);
  }
}

window.addEventListener("load", () => {
  confettiBurst(26);
});
