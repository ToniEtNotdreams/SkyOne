  // Thème
  const themeToggle = document.getElementById("toggleTheme");
  const htmlElement = document.documentElement;

  if (localStorage.getItem("theme")) {
    htmlElement.setAttribute("data-theme", localStorage.getItem("theme"));
    updateIcon();
  }

  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon();
  });

  function updateIcon() {
    const currentTheme = htmlElement.getAttribute("data-theme");
    themeToggle.textContent = currentTheme === "dark" ? "🌙" : "☀️";
  }

window.onload = () => {
  const messages = [
    "Rejoins-nous vite !",
    "Plugins exclusifs.",
    "Évènements hebdomadaires et tournois.",
    "Rejoignez notre Discord pour plus d'infos."
  ];

  const scroller = document.getElementById("scroller");
  let index = 0;

  function showMessage() {
    scroller.textContent = messages[index];
    scroller.style.transition = "none";
    scroller.style.transform = "translateX(50%)"; // start milieu à droite
    scroller.style.opacity = "1";

    // Laisser 3s visible au milieu à droite avant de partir
    setTimeout(() => {
      scroller.style.transition = "transform 5s linear";
      scroller.style.transform = "translateX(-50%)"; // fin milieu à gauche
    }, 3000);
  }

  scroller.addEventListener("transitionend", () => {
    // Après glissement, pause 3s à gauche, puis changer message
    scroller.style.transition = "none";
    scroller.style.transform = "translateX(-50%)";
    setTimeout(() => {
      index = (index + 1) % messages.length;
      showMessage();
    }, 3000);
  });

  showMessage();
};

