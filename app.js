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

//Scroller
const messages = [
  "Rrejoins-nous vite !",
  "Plugins exclusifs.",
  "Évènements hebdomadaires et tournois.",
  "Rejoignez notre Discord pour plus d'infos."
];

const scroller = document.getElementById("scroller");

let index = 0;

function showMessage() {
  scroller.textContent = messages[index];
  scroller.style.transition = "none";
  scroller.style.transform = "translateX(100%)"; // start à droite

  requestAnimationFrame(() => {
    scroller.style.transition = "transform 5s linear";
    scroller.style.transform = "translateX(-100%)"; // glisse à gauche
  });

  scroller.addEventListener("transitionend", () => {
    index = (index + 1) % messages.length;
    showMessage();
  }, { once: true });
}

showMessage();
