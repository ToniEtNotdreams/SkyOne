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
  const wrapper = document.getElementById("scroller-wrapper");
  const curtainWidth = 50;

  let index = 0;
  const pauseDuration = 3000;
  const moveDuration = 4000;

  function showMessage() {
    scroller.textContent = messages[index];
    scroller.style.transition = "none";

    const textWidth = scroller.offsetWidth;
    const containerWidth = wrapper.offsetWidth;

    // Position initiale : complètement caché derrière rideau droit (à droite)
    scroller.style.right = `-${textWidth}px`;
    scroller.style.left = "auto";

    // Forcer recalcul style
    void scroller.offsetWidth;

    // Entrée : glisse de right = -textWidth jusqu’à right = curtainWidth (50px)
    scroller.style.transition = `right ${moveDuration}ms linear`;
    scroller.style.right = `${curtainWidth}px`;

    setTimeout(() => {
      // Pause 3s à droite (visible)
      setTimeout(() => {
        // Sortie vers la gauche : on passe de right = 50px à left = -textWidth - curtainWidth
        scroller.style.transition = "none";
        scroller.style.right = "auto";
        scroller.style.left = `${-textWidth - curtainWidth}px`;

        // Forcer recalcul style
        void scroller.offsetWidth;

        // Animation sortie : glisse de left = -textWidth - curtainWidth à left = containerWidth - curtainWidth
        scroller.style.transition = `left ${moveDuration}ms linear`;
        scroller.style.left = `${containerWidth - curtainWidth}px`;
      }, pauseDuration);
    }, moveDuration);
  }

  // Event transitionend pour alterner entre droite et gauche
  scroller.addEventListener("transitionend", () => {
    // Detecte si on vient de finir sortie à gauche (left >= containerWidth - curtainWidth)
    if (scroller.style.left !== "auto" && parseInt(scroller.style.left) >= wrapper.offsetWidth - curtainWidth) {
      index = (index + 1) % messages.length;
      showMessage();
    }
  });

  showMessage();
};


