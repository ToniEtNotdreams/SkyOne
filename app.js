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
    scroller.style.transform = "translateX(100%)";

    requestAnimationFrame(() => {
      scroller.style.transition = "transform 2.5s linear";
      scroller.style.transform = "translateX(0%)";

      scroller.addEventListener("transitionend", onStop, { once: true });
    });
  }

  function onStop() {
    setTimeout(() => {
      scroller.style.transition = "transform 2.5s linear";
      scroller.style.transform = "translateX(-100%)";

      scroller.addEventListener("transitionend", () => {
        index = (index + 1) % messages.length;
        showMessage();
      }, { once: true });
    }, 2000);
  }

  showMessage();
};
