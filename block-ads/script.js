setInterval(() => {
  for (const button of document.getElementsByClassName("ytp-ad-skip-button")) {
    button.click(); // Botões Pular anúncio 
  }
}, 300);