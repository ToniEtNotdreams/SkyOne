// Toggle mode sombre / clair
const toggleThemeBtn = document.getElementById('toggleTheme');
toggleThemeBtn.addEventListener('click', () => {
  const html = document.documentElement;
  if (html.getAttribute('data-theme') === 'dark') {
    html.setAttribute('data-theme', 'light');
    toggleThemeBtn.textContent = '🌙';
  } else {
    html.setAttribute('data-theme', 'dark');
    toggleThemeBtn.textContent = '☀️';
  }
});

// Copier IP au clic
const copyIPBtn = document.getElementById('copyIP');
copyIPBtn.addEventListener('click', () => {
  const ip = copyIPBtn.getAttribute('data-ip');
  navigator.clipboard.writeText(ip).then(() => {
    copyIPBtn.textContent = 'IP Copiée !';
    setTimeout(() => {
      copyIPBtn.textContent = 'Copier l’IP';
    }, 2000);
  });
});

// Connecter à Bedrock bouton
const connectBedrockBtn = document.getElementById('connectBedrock');
connectBedrockBtn.addEventListener('click', () => {
  alert('Pour se connecter à Bedrock, utilisez l\'IP : bedrock.skyone.com');
});
