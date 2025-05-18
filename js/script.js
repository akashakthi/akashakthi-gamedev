// Toggle hamburger menu with blur background
function toggleMenu() {
  const nav = document.getElementById("mainNav");
  const blurBg = document.getElementById("blur-overlay");
  const mobilePanel = document.getElementById("mobileNav");
  nav.classList.toggle("active");
  blurBg.classList.toggle("visible");
  mobilePanel.classList.toggle("show");
}

// Auto audio play
window.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio("audio/Late Night Game Dev.mp3");
  audio.loop = true;
  audio.volume = 0.4;
  audio.play().catch(e => console.log("Audio autoplay blocked by browser"));
});

// Particle effect
const canvas = document.createElement('canvas');
canvas.id = 'particles-canvas';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    d: Math.random() * 1 + 0.5
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0, 200, 255, 0.5)";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    ctx.fill();
  });
  update();
}

function update() {
  particles.forEach(p => {
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawParticles, 33);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
