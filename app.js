// Gestion du thème sombre/clair avec stockage en localStorage
const themeToggle = document.getElementById("toggleTheme");
const htmlElement = document.documentElement;

// Vérifie si un thème est enregistré en localStorage
if (localStorage.getItem("theme")) {
  htmlElement.setAttribute("data-theme", localStorage.getItem("theme"));
  updateIcon();
}

// Change le thème en cliquant sur le bouton
themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateIcon();
});

// Met à jour l’emoji du bouton selon le thème actif
function updateIcon() {
  const currentTheme = htmlElement.getAttribute("data-theme");
  themeToggle.textContent = currentTheme === "dark" ? "🌙" : "☀️";
}
