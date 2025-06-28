const toggleThemeButton = document.getElementById('toggleTheme');

function applyTheme(theme) {
  document.documentElement.style.transition = 'background-color 0.5s ease, color 0.5s ease';
  document.documentElement.setAttribute('data-theme', theme);
  toggleThemeButton.textContent = theme === 'dark' ? '☀️' : '🌙';
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

  // On met à jour le bouton selon le thème initial
  const current = document.documentElement.getAttribute('data-theme');
  toggleThemeButton.textContent = current === 'dark' ? '☀️' : '🌙';
});

toggleThemeButton.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

const copyBtn = document.getElementById('copyIP');
if (copyBtn) {
  copyBtn.addEventListener('click', function() {
    const ip = this.getAttribute('data-ip');
    navigator.clipboard.writeText(ip).then(() => {
      alert("IP copiée : " + ip);
    });
  });
});
