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
  artista => artista.name === decodeURIComponent(artistaNombre)
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
artistasDestacados.forEach(artista => {
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
    <h1>${artistaActivo.name}</h1>
    <p>${artistaActivo.estilo}</p>
    <audio controls>
      <source src="assets/audio/${artistaActivo.audio}" type="audio/mpeg">
      Tu navegador no soporta el elemento de audio.
    </audio>
    <pre style="margin-top:15px; background-color:#1e1e1e; padding:10px; border-radius:5px; color:#ccc;">
${artistaActivo.lyrics}
    </pre>
  `;

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
