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
