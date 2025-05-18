document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-darkmode");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
});
