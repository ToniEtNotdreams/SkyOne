// Fonction pour appliquer le thème
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const toggleButton = document.getElementById('toggleTheme');
  if (toggleButton) {
    toggleButton.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  localStorage.setItem('theme', theme);
}

// Vérifie et applique le thème au chargement
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  // Gestion du bouton de thème
  const toggleButton = document.getElementById('toggleTheme');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // Gestion du bouton Conditions d'utilisation
  const legalButton = document.getElementById('legalButton');
  if (legalButton) {
    legalButton.addEventListener('click', () => {
      window.location.href = './conditions';
    });
  }

  // Gestion du bouton Copier IP (optionnel si présent)
  const copyIpButton = document.getElementById('copyIP');
  if (copyIpButton) {
    copyIpButton.addEventListener('click', () => {
      const ip = copyIpButton.getAttribute('data-ip');
      navigator.clipboard.writeText(ip).then(() => {
        alert('IP copiée : ' + ip);
      });
    });
  }
});
