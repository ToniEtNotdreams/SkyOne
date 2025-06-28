document.addEventListener('DOMContentLoaded', () => {
  // Thème
  const toggleThemeButton = document.getElementById('toggleTheme');
  if (toggleThemeButton) {
    const applyTheme = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      toggleThemeButton.textContent = theme === 'dark' ? '☀️' : '🌙';
      localStorage.setItem('theme', theme);
    };

    const applySystemTheme = () => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
      } else {
        applyTheme('light');
      }
    };

    const savedTheme = localStorage.getItem('theme');
    savedTheme ? applyTheme(savedTheme) : applySystemTheme();

    toggleThemeButton.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Copier IP
  const copyIPButton = document.getElementById('copyIP');
  if (copyIPButton) {
    copyIPButton.addEventListener('click', function() {
      const ip = this.getAttribute('data-ip');
      navigator.clipboard.writeText(ip).then(() => {
        alert("IP copiée : " + ip);
      });
    });
  }

  // Conditions bouton
  const legalButton = document.getElementById('legalButton');
  if (legalButton) {
    legalButton.addEventListener('click', () => {
      window.location.href = './conditions.html';
    });
  }
});
