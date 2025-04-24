// Verificar si el usuario está autenticado
if (!localStorage.getItem('isLoggedIn')) {
  window.location.href = 'login.html'; // Redirigir al login si no está autenticado
}

// Manejar cierre de sesión
document.getElementById('logout')?.addEventListener('click', () => {
  localStorage.removeItem('isLoggedIn'); // Eliminar estado de sesión
  alert('Has cerrado sesión');
  window.location.href = 'login.html'; // Redirigir al login
});

// =============================================
// DOM: ELEMENTOS DEL HTML
// =============================================
const zonaArtistas = document.getElementById("zonaArtistas");
const infoArtista = document.getElementById("infoArtista");
const contenedorDecorativos = document.getElementById("artistasDecorativos");

// =============================================
// TARJETAS DE ARTISTAS DESTACADOS
// =============================================
artistasDestacados.forEach(artista => {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta-artista";

  tarjeta.innerHTML = `
    <img src="assets/img/${artista.img}" alt="${artista.name}">
    <h4>${artista.name}</h4>
    <p style='font-size: 0.8em; color: #ccc;'>${artista.estilo}</p>
  `;

  // Redirige a artista.html con una transición suave
  tarjeta.addEventListener("click", () => {
    const nombreCodificado = encodeURIComponent(artista.name);
    document.body.classList.add("fade-out"); // Aplica efecto de salida
    setTimeout(() => {
      window.location.href = `artista.html?nombre=${nombreCodificado}`;
    }, 400); // Espera a que termine el efecto
  });

  zonaArtistas.appendChild(tarjeta);
});

// =============================================
// TARJETAS DE ARTISTAS DECORATIVOS
// =============================================
artistasDecorativos.forEach(artista => {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta-artista";
  tarjeta.innerHTML = `
    <img src="assets/img/${artista.img}" alt="${artista.name}">
    <h4>${artista.name}</h4>
    <p style='font-size: 0.8em; color: #aaa;'>${artista.estilo}</p>
  `;
  contenedorDecorativos.appendChild(tarjeta);
});
