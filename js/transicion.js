// transition.js
document.querySelectorAll('a[href]').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
      const destino = this.getAttribute('href');
      
      // Solo aplicar a enlaces internos (no "#" ni externos)
      if (destino && !destino.startsWith('#') && !destino.startsWith('http')) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = destino;
        }, 400);
      }
    });
  });
  