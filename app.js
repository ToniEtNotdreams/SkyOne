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

const copyIPBtn = document.getElementById('copyIP');
if(copyIPBtn) {
  copyIPBtn.addEventListener('click', () => {
    const ip = copyIPBtn.getAttribute('data-ip');
    navigator.clipboard.writeText(ip).then(() => {
      copyIPBtn.textContent = 'IP Copiée !';
      setTimeout(() => {
        copyIPBtn.textContent = 'Copier l’IP';
      }, 2000);
    });
  });
}

const connectBedrockBtn = document.getElementById('connectBedrock');
if(connectBedrockBtn) {
  connectBedrockBtn.addEventListener('click', () => {
    alert('Pour se connecter à Bedrock, utilisez l\'IP : bedrock.skyone.com');
  });
}
