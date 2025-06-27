// Appliquer le thème au chargement selon la préférence système
function applySystemTheme() {
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleThemeButton.textContent = '☀️'; // icône soleil pour passer au clair
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleThemeButton.textContent = '🌙'; // icône lune pour passer au sombre
  }
}

const toggleThemeButton = document.getElementById('toggleTheme');

applySystemTheme();

toggleThemeButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleThemeButton.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleThemeButton.textContent = '☀️';
  }
});
