function rand(min, max){ return Math.random() * (max - min) + min; }

function makeDot(x, y){
  const fx = document.getElementById("fx");
  if(!fx) return;

  const d = document.createElement("div");
  d.className = "fx-dot";

  const angle = rand(0, Math.PI * 2);
  const dist = rand(80, 220);

  d.style.left = (x - 5) + "px";
  d.style.top  = (y - 5) + "px";

  d.style.setProperty("--x0", "0px");
  d.style.setProperty("--y0", "0px");
  d.style.setProperty("--x1", (Math.cos(angle) * dist) + "px");
  d.style.setProperty("--y1", (Math.sin(angle) * dist) + "px");

  // random-ish palette
  const colors = [
    "rgba(251,191,36,.95)", // gold
    "rgba(255,77,109,.92)", // red
    "rgba(96,165,250,.90)", // ice
    "rgba(52,211,153,.85)"  // green
  ];
  d.style.background = colors[Math.floor(Math.random() * colors.length)];
  d.style.width = rand(8, 14) + "px";
  d.style.height = d.style.width;

  fx.appendChild(d);
  setTimeout(() => d.remove(), 950);
}

function sparkle(e){
  const x = (e && e.clientX) || (window.innerWidth * 0.5);
  const y = (e && e.clientY) || (window.innerHeight * 0.35);
  for(let i=0;i<14;i++) makeDot(x, y);
}

function confetti(){
  const x = window.innerWidth * 0.5;
  const y = window.innerHeight * 0.35;
  for(let i=0;i<26;i++) makeDot(x + rand(-40,40), y + rand(-20,20));
}

// tiny auto sparkle on first load
window.addEventListener("load", () => {
  setTimeout(() => confetti(), 250);
});
