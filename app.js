// Thème
const toggleThemeButton = document.getElementById('toggleTheme');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (toggleThemeButton) toggleThemeButton.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

function applySystemTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applySystemTheme();
  }
});

// Bouton copie IP
const copyIpButton = document.getElementById('copyIP');
if (copyIpButton) {
  copyIpButton.addEventListener('click', function () {
    const ip = this.getAttribute('data-ip');
    navigator.clipboard.writeText(ip).then(() => {
      alert("IP copiée : " + ip);
    });
  });
}

// Bouton conditions d'utilisation
const legalButton = document.getElementById('legalButton');
if (legalButton) {
  legalButton.addEventListener('click', () => {
    window.location.href = 'conditions.html';
  });
}
