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
  const container = document.getElementById("scroller-container");
  let index = 0;

  const pauseDuration = 3000; // pause 3s
  const moveDuration = 4000;  // durée glissement

  function showMessage() {
    scroller.textContent = messages[index];
    scroller.style.transition = "none";
    scroller.style.right = `-${scroller.offsetWidth}px`; // complètement caché à droite
    scroller.style.opacity = "1";

    // Après un petit délai (pour mise à jour style)
    setTimeout(() => {
      // glisser jusqu'à 50px depuis le bord droit (visible)
      scroller.style.transition = `right ${moveDuration}ms linear`;
      scroller.style.right = `50px`;
    }, 50);

    // Après le glissement vers la droite (entrée visible)
    setTimeout(() => {
      // pause 3s avant de repartir
      setTimeout(() => {
        // repartir vers la gauche jusqu'à - (largeur du texte + 50px) (caché à gauche)
        scroller.style.transition = `right ${moveDuration}ms linear`;
        scroller.style.right = `${container.offsetWidth - scroller.offsetWidth - 50}px`;
      }, pauseDuration);
    }, moveDuration + 50);
  }

  scroller.addEventListener("transitionend", () => {
    // Quand le texte disparait complètement à gauche, changer le message
    if (parseInt(scroller.style.right) > container.offsetWidth / 2) return; // ignore fin entrée

    index = (index + 1) % messages.length;
    showMessage();
  });

  showMessage();
};


