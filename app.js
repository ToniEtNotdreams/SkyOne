const toggleThemeButton = document.getElementById('toggleTheme');

function applySystemTheme() {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleThemeButton.textContent = '☀️'; 
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleThemeButton.textContent = '🌙'; 
  }
}

applySystemTheme();

toggleThemeButton.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  if(current === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleThemeButton.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleThemeButton.textContent = '☀️';
  }
});
