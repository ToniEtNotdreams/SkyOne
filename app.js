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
    "Évènements et tournois chaque semaine.",
    "Notre Discord t’attend !"
  ];

  const scroller = document.getElementById("scroller");
  let index = 0;

  function defileMessage() {
    scroller.textContent = messages[index];
    scroller.style.transition = "none";
    scroller.style.transform = "translateX(120%)";

    requestAnimationFrame(() => {
      scroller.style.transition = "transform 2s linear";
      scroller.style.transform = "translateX(0%)";

      scroller.addEventListener("transitionend", () => {
        setTimeout(() => {
          scroller.style.transition = "transform 2s linear";
          scroller.style.transform = "translateX(-120%)";

          scroller.addEventListener("transitionend", () => {
            index = (index + 1) % messages.length;
            defileMessage();
          }, { once: true });

        }, 2000); // pause 2s au centre
      }, { once: true });
    });
  }

  defileMessage();
};
