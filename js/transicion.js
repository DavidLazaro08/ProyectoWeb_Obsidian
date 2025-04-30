// transition.js mejorado

// Detectar la URL actual para evitar reinicios innecesarios
const paginaActual = window.location.pathname.split("/").pop();

// Seleccionar todos los enlaces internos
document.querySelectorAll('a[href]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    const destino = this.getAttribute('href');

    // Ignorar enlaces vacíos, externos, anclas o que vayan a la misma página
    if (
      !destino ||
      destino.startsWith('#') ||
      destino.startsWith('http') ||
      destino === paginaActual
    ) {
      return;
    }

    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = destino;
    }, 400);
  });
});