window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      { url: "swagger.yaml", name: "Asosiy API" }
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    onComplete: function() {
      // Kod bloklarini bosganda nusxa olish funksiyasi
      document.addEventListener('click', function(e) {
        const codeBlock = e.target.closest('code');
        if (codeBlock && codeBlock.closest('.description')) {
          const text = codeBlock.innerText.replace('bash\n', '').replace('bash ', '');
          navigator.clipboard.writeText(text).then(() => {
            const originalBg = codeBlock.style.backgroundColor;
            codeBlock.style.backgroundColor = '#4990e2';
            setTimeout(() => codeBlock.style.backgroundColor = originalBg, 500);
            alert('Nusxa olindi!');
          });
        }
      });
    }
  });

  //</editor-fold>
};
