document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio ready!");

  const toggleBtn = document.getElementById("toggle-darkmode");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
