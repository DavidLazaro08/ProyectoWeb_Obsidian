// =============================================
// ARCHIVO: artista.js
// Vista individual de artista (3 columnas)
// =============================================

// =============================================
// OBTENER NOMBRE DEL ARTISTA DESDE LA URL
// =============================================
const params = new URLSearchParams(window.location.search);
const artistaNombre = params.get("nombre");

// =============================================
// BUSCAMOS AL ARTISTA SELECCIONADO
// =============================================
const artistaActivo = artistasDestacados.find(
  (artista) => artista.name === decodeURIComponent(artistaNombre)
);

// =============================================
// REFERENCIAS A ELEMENTOS DEL DOM
// =============================================
const menuArtistas = document.getElementById("menuArtistas");
const contenidoArtista = document.getElementById("contenidoArtista");
const infoArtistaLateral = document.getElementById("infoArtistaLateral");

// =============================================
// MOSTRAR MENÚ LATERAL CON TODOS LOS ARTISTAS
// =============================================
menuArtistas.innerHTML = `<h3>Artistas</h3>`;
artistasDestacados.forEach((artista) => {
  const item = document.createElement("li");
  item.textContent = artista.name;
  item.addEventListener("click", () => {
    const nombreCodificado = encodeURIComponent(artista.name);
    window.location.href = `artista.html?nombre=${nombreCodificado}`;
  });
  menuArtistas.appendChild(item);
});

// =============================================
// CARGAR INFO DEL ARTISTA ACTUAL
// =============================================
if (artistaActivo) {
  // CENTRO: Nombre, estilo y audio
  contenidoArtista.innerHTML = `
    <div class="artista-cabecera">
      <h1>${artistaActivo.name}</h1>
      <p class="estilo">${artistaActivo.estilo}</p>
      <p class="oyentes">Escuchado por miles de oyentes mensuales</p>
    </div>

    <div class="acciones-artista">
      <button class="btn-reproducir">▶ Reproducir</button>
      <button class="btn-seguir">+ Seguir</button>
    </div>

    <h3 class="subtitulo">Canción destacada</h3>
    <audio controls>
      <source src="assets/audio/${artistaActivo.audio}" type="audio/mpeg">
      Tu navegador no soporta el elemento de audio.
    </audio>

    <h3 class="subtitulo">Letra</h3>
    <pre class="letras-artista">${artistaActivo.lyrics}</pre>

    <h3 class="subtitulo">Discografía destacada</h3>
    <div class="discografia">
      ${artistaActivo.discos ? artistaActivo.discos.map(disco => `
        <div class="album">
          <img src="assets/img/${disco.portada}" alt="Portada de ${disco.titulo}">
          <p>${disco.titulo}</p>
        </div>
      `).join('') : `<p>Sin discos disponibles</p>`}
    </div>
  `;

  // Activar audio al hacer clic en "Reproducir"
  const btnReproducir = document.querySelector(".btn-reproducir");
  const audio = document.querySelector("audio");

  if (btnReproducir && audio) {
    btnReproducir.addEventListener("click", () => {
      audio.play();
    });
  }


  // DERECHA: Imagen y bio
  infoArtistaLateral.innerHTML = `
    <img src="assets/img/${artistaActivo.img}" alt="${artistaActivo.name}">
    <h4>${artistaActivo.name}</h4>
    <p>${artistaActivo.info}</p>
  `;
} else {
  // Si no se encuentra el artista
  contenidoArtista.innerHTML = `<p>Artista no encontrado.</p>`;
}

// =============================================
// TRANSICIÓN SUAVE AL VOLVER A INDEX DESDE EL MENÚ
// =============================================
const enlaceArtistas = document.querySelector(".nav-artistas");

if (enlaceArtistas) {
  enlaceArtistas.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el salto inmediato
    document.body.classList.add("fade-out"); // Aplica animación
    setTimeout(() => {
      window.location.href = this.href; // Redirige después del efecto
    }, 400); // Tiempo de espera igual al del efecto CSS
  });
}

