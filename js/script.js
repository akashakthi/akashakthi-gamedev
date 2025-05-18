// === Scroll Logo to Top on Click (Portrait Only) ===
document.getElementById("logo").addEventListener("click", () => {
  if (window.innerWidth < 768) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// === Responsive Logo Position (center saat scroll + portrait) ===
window.addEventListener("scroll", () => {
  const logo = document.getElementById("logo");
  if (window.innerWidth < 768 && window.scrollY > 50) {
    logo.classList.add("center");
  } else {
    logo.classList.remove("center");
  }
});

// === Hamburger Toggle with MobileNav & Close Button ===
function toggleMenu() {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.toggle("show");

  // Optional: blur background if needed
  const blur = document.getElementById("blur-overlay");
  blur?.classList.toggle("visible");
}

// === Close Menu with Close Button ===
document.getElementById("closeNavBtn").addEventListener("click", () => {
  document.getElementById("mobileNav").classList.remove("show");
  document.getElementById("blur-overlay")?.classList.remove("visible");
});

// === Audio Setup & Sound Toggle ===
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  const soundToggle = document.getElementById("soundToggle");

  audio.volume = 0.4;
  audio.muted = false;

  audio.play().catch(() => {
    console.log("🔇 Autoplay blocked by browser.");
  });

  soundToggle.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      soundToggle.textContent = "🔊";
    } else {
      audio.pause();
      soundToggle.textContent = "🔈";
    }
  });
});

// === Scroll to Game Section ===
function scrollToGame(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// === Particle Background Effect ===
const canvas = document.getElementById("particles-canvas");
const ctx = canvas.getContext("2d");
canvas.style.pointerEvents = "none";

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  r: Math.random() * 2 + 1,
  d: Math.random() * 1 + 0.5,
}));

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0, 200, 255, 0.5)";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
    ctx.fill();
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
}
setInterval(drawParticles, 33);
