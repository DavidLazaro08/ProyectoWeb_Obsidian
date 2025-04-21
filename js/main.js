// =============================================
// ARTISTAS DESTACADOS
// =============================================
const artistasDestacados = [
    {
      name: "Post Malone",
      img: "postmalone.webp",
      info: "Post Malone es un cantante estadounidense que mezcla hip hop, pop y rock con un estilo muy personal.",
      estilo: "Trap / Hip Hop alternativo",
      audio: "postmalone_tema.mp3",
      lyrics: "If you buy that echo, why you lyin'? You broke",
    },
    {
      name: "Grimes",
      img: "grimes.webp",
      info: "Artista canadiense de electrónica experimental, visualmente innovadora y sonoramente única.",
      estilo: "Electro pop / Experimental",
      audio: "Grimes Genesis.mp3",
      lyrics: "My heart will never feel, will never see, will never know...",
    },
    {
      name: "Tame Impala",
      img: "tameimpala.jpg",
      info: "Proyecto de Kevin Parker que fusiona rock psicodélico con electrónica suave e hipnótica.",
      estilo: "Psicodelia / Indie Rock",
      audio: "tameimpala_letithappen.mp3",
      lyrics: "Let it happen, let it happen...",
    },
    {
        name: "Duran Duran",
        img: "duranduran.jpg",
        info: "Banda británica de pop y rock, pioneros del new wave y synth-pop en los años 80.",
        estilo: "Pop / New Wave",
        audio: "duranduran_comeundone.mp3",
        lyrics: "Hungry like the wolf...\nIn the night I hear them growl...",
    },
    {
        name: "Proyecto Lazarus",
        img: "proyectolazarus.jpg",
        info: "Proyecto musical experimental de ambient, drone y paisajes sonoros oscuros e introspectivos.",
        estilo: "Ambient / Drone experimental",
        audio: "lazarus_ambient.mp3",
        lyrics: "(Instrumental)",
      },
    {
      name: "Duki",
      img: "duki.webp",
      info: "Figura clave del trap argentino, con una evolución musical hacia lo melódico y lo emocional.",
      estilo: "Trap latino / Urbano",
      audio: "duki_goteo.mp3",
      lyrics: "Tengo el goteo, yeah...",
    },
    {
      name: "Kase O",
      img: "kaseo.jpeg",
      info: "Kase O es uno de los mayores referentes del rap en español, con letras profundas y estilo personal.",
      estilo: "Rap consciente / Hip Hop",
      audio: "kaseo_reflexiones.mp3",
      lyrics: "Las palabras pesan más que el plomo...",
    },
    {
      name: "Ca7triel y Paco Amoroso",
      img: "ca7trielypacoamoroso.jpg",
      info: "dúo de trap experimental, hip hop, electrónica y pop originario de Buenos Aires, Argentina. Está formado por Catriel Guerreiro y Ulises Guerriero alias Paco Amoroso.",
      estilo: "Trap Experimental",
      audio: "lemniscata_fragmento1.mp3",
      lyrics: " Let the knowledge invade your psyche...",
    },
    {
      name: "Brian Eno",
      img: "brianeno.jpeg",
      info: "Pionero de la música ambient. Creador de atmósferas electrónicas profundas e hipnóticas.",
      estilo: "Ambient / Experimental",
      audio: "brianeno_reflections.mp3",
      lyrics: "(Ambient instrumental)",
    },
    {
      name: "Justice",
      img: "justice.jpg",
      info: "Dúo francés de música electrónica con toques de rock y estética retro-futurista.",
      estilo: "Electrónica / French House",
      audio: "justice_dance.mp3",
      lyrics: "Do the dance...\nJump on the floor...",
    }
  ];
  
  
  // =============================================
// ARTISTAS DECORATIVOS (SOLO VISUAL)
// =============================================
const artistasDecorativos = [
    { name: "Haken", img: "haken.jpeg", estilo: "Metal progresivo" },
    { name: "Opeth", img: "opeth.jpeg", estilo: "Metal Progresivo" },
    { name: "Estopa", img: "estopa.jpeg", estilo: "Pop - Rumba" },
    { name: "Falsalarma", img: "falsalarma.jpeg", estilo: "Rap" },
    { name: "Lemniscata", img: "Lemniscata.jpg", estilo: "Metal Progresivo" },
    { name: "Canserbero", img: "canserbero.jpeg", estilo: "Rap Consciente" },
    { name: "7 Notas 7 Colores", img: "7notas7colores.jpeg", estilo: "Rap" },
    { name: "Charly García", img: "charlygarcia.jpeg", estilo: "Rock - Jazz - Experimental" },
    { name: "Phil Collins", img: "philcollins.jpg", estilo: "Pop Rock Sinfónico" },
    { name: "The Alan Parson Project", img: "thealanparsonproject.jpeg", estilo: "Art Rock - Hard rock" },
    { name: "Arma Blanca", img: "armablanca.webp", estilo: "Rap" },
    { name: "Nach", img: "nach.webp", estilo: "Rap" },
    { name: "The Midnight", img: "themidnight.jpg", estilo: "Synthwave" },
    { name: "Antonio Vega", img: "antoniovega.jpg", estilo: "Pop - Rock" },
    { name: "OBK", img: "obk.jpeg", estilo: "Electro-Pop" },
    { name: "Pendragon", img: "pendragon.jpeg", estilo: "Rock progresivo" },
    { name: "Bejo", img: "bejo.jpeg", estilo: "Rap" },
    { name: "Tool", img: "tool.jpeg", estilo: "Metal Progresivo" },
    { name: "Steven Wilson", img: "stevenwilson.jpeg", estilo: "Rock Experimental - Electrónica" },
    { name: "Max Ritchter", img: "maxritchter.jpeg", estilo: "Clásica moderna" },
    { name: "Kitaro", img: "kitaro.jpg", estilo: "New Age" },
    { name: "System Of A Down", img: "systemofadown.jpeg", estilo: "Hard rock - Metal Alternativo" },
    { name: "Steve Roach", img: "steveroach.jpeg", estilo: "Ambient" },
    { name: "Robert Rich", img: "robertrich.jpg", estilo: "Ambient" },
    { name: "Deftones", img: "deftones.jpeg", estilo: "Metal alternativo" },
    { name: "Camarón de la Isla", img: "camaron.jpeg", estilo: "Flamenco fusión" },
    { name: "Tote King", img: "toteking.webp", estilo: "Hip Hop" },
    { name: "Manuel Carrasco", img: "manuelcarrasco.jpeg", estilo: "Pop electrónico" },
    { name: "Riverside", img: "riverside.webp", estilo: "Rock progresivo" },
    { name: "Ayreon", img: "ayreon.jpeg", estilo: "Metal alternativo" }
  ];
  
  
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

  tarjeta.addEventListener("click", () => {
    infoArtista.innerHTML = `
      <h3>${artista.name}</h3>
      <p>${artista.info}</p>
      <p><strong>Estilo:</strong> ${artista.estilo}</p>

      <audio controls style="margin: 10px 0;">
        <source src="assets/audio/${artista.audio}" type="audio/mpeg">
        Tu navegador no soporta el elemento de audio.
      </audio>

      <pre style="white-space: pre-wrap; background-color: #1e1e1e; padding: 10px; border-radius: 5px; color: #ccc;">
${artista.lyrics}
      </pre>
  `;
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
