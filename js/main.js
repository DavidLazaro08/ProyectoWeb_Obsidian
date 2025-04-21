// =============================================
// ARTISTAS DESTACADOS
// =============================================
// Aquí hemos definido los artistas que sí van a tener contenido de verdad.
// Cada uno tiene nombre, imagen, descripción, audio, letra y un vídeo de YouTube opcional.
// La estructura en sí es un array de objetos, como vimos en los apuntes de JavaScript.

const artists = [
    {
      name: "Rihanna",
      img: "assets/img/rihanna.jpg",
      info: "Rihanna es una artista barbadense conocida por éxitos como 'Umbrella' y 'Diamonds'.",
      audio: "assets/audio/rihanna_umbrella.mp3",
      lyrics: "You can stand under my umbrella, ella, ella, eh, eh, eh...",
      youtube: "https://www.youtube.com/embed/CvBfHwUxHIk"
    },
    {
      name: "Linkin Park",
      img: "assets/img/linkinpark.jpg",
      info: "Banda de rock alternativo y nu metal, famosa por temas como 'Numb' y 'In The End'.",
      audio: "assets/audio/linkin_numb.mp3",
      lyrics: "I've become so numb, I can't feel you there...",
      youtube: "https://www.youtube.com/embed/kXYiU_JCYtU"
    },
    {
      name: "Rosalía",
      img: "assets/img/rosalia.jpg",
      info: "Artista española que mezcla flamenco con pop y urbano. Éxito internacional.",
      audio: "assets/audio/rosalia_motomami.mp3",
      lyrics: "Motomami, motomami, motomami...",
      youtube: "https://www.youtube.com/embed/Rht7rBHuXW8"
    },
    {
      name: "Duki",
      img: "assets/img/duki.jpg",
      info: "Rapero argentino pionero del trap en español. Conocido por su estilo propio.",
      audio: "assets/audio/duki_goteo.mp3",
      lyrics: "Tengo el goteo, yeah...",
      youtube: "https://www.youtube.com/embed/Eo-KmOd3i7s"
    }
  ];
  
  // =============================================
  // ELEMENTOS DEL HTML A LOS QUE VAMOS A TRABAJARLES EL DOM
  // =============================================
  // Seleccionamos dos zonas del HTML:
  // 1. Donde van las tarjetas (`#artistGrid`)
  // 2. Donde se mostrará la info de cada artista (`#artistInfo`)
  // Esta parte está basada en lo que vimos del DOM: `getElementById`, `innerHTML`, etc.
  
  const artistGrid = document.getElementById("artistGrid");
  const artistInfo = document.getElementById("artistInfo");
  
  // =============================================
  // CREACIÓN DE LAS TARJETAS DE ARTISTAS
  // =============================================
  // Aquí recorremos el array de artistas y vamos creando las tarjetas en la web.
  // Cada tarjeta tendrá imagen y nombre, y al hacer clic se carga el contenido del artista.
  // Esta parte conecta con el tema de eventos (`addEventListener`) y trabajar con el DOM.
  
  artists.forEach(artist => {
    const card = document.createElement("div");
    card.className = "artist-card";
  
    // Esta es la estructura visual de cada tarjeta (HTML generado con JS)
    card.innerHTML = `
      <img src="${artist.img}" alt="${artist.name}">
      <h4>${artist.name}</h4>
    `;
  
    // Cuando haces clic en la tarjeta, se muestra toda la info del artista
    card.addEventListener("click", () => {
      artistInfo.innerHTML = `
        <h3>${artist.name}</h3>
        <p>${artist.info}</p>
  
        <!-- Reproductor de audio HTML5 -->
        <audio controls style="margin: 10px 0;">
          <source src="${artist.audio}" type="audio/mpeg">
          Tu navegador no soporta el elemento de audio.
        </audio>
  
        <!-- Letra de la canción. El uso de <pre> con CSS mantiene los saltos de línea -->
        <pre style="white-space: pre-wrap; background-color: #1e1e1e; padding: 10px; border-radius: 5px; color: #ccc;">
  ${artist.lyrics}
        </pre>
  
        <!-- Vídeo relacionado de YouTube (opcional) -->
        <div style="margin-top: 20px;">
          <p style="font-weight: bold;">Vídeo relacionado (por si queremos ponerlo):</p>
          <iframe width="300" height="170" src="${artist.youtube}" frameborder="0" allowfullscreen></iframe>
        </div>
      `;
    });
  
    // Finalmente, añadimos cada tarjeta al contenedor
    artistGrid.appendChild(card);
  });
  