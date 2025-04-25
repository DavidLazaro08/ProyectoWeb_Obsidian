// =============================================
// LISTA COMPARTIDA DE ARTISTAS DESTACADOS
// =============================================
const artistasDestacados = [
  {
    name: "Post Malone",
    img: "postmalone.webp",
    info: "Post Malone es un cantante estadounidense que mezcla hip hop, pop y rock con un estilo muy personal.",
    estilo: "Trap / Hip Hop alternativo",
    audio: "postmalone_tema.mp3",
    lyrics: "If you buy that echo, why you lyin'? You broke",
    discos: [
      { titulo: "Hollywood's Bleeding", portada: "hollywoods_bleeding.jpeg" },
      { titulo: "Twelve Carat Toothache", portada: "twelve_carat_toothache.jpeg" }
    ]
  },
  {
    name: "Grimes",
    img: "grimes.webp",
    info: "Artista canadiense de electrónica experimental, visualmente innovadora y sonoramente única.",
    estilo: "Electro pop / Experimental",
    audio: "Grimes_Genesis.mp3",
    lyrics: "My heart will never feel, will never see, will never know...",
    discos: [
      { titulo: "Art Angels", portada: "art_angels.jpeg" },
      { titulo: "Miss Anthropocene", portada: "miss_anthropocene.jpeg" }
    ]
  },
  {
    name: "Tame Impala",
    img: "tameimpala.jpg",
    info: "Proyecto de Kevin Parker que fusiona rock psicodélico con electrónica suave e hipnótica.",
    estilo: "Psicodelia / Indie Rock",
    audio: "tameimpala_letithappen.mp3",
    lyrics: "Let it happen, let it happen...",
    discos: [
      { titulo: "Currents", portada: "currents.jpeg" },
      { titulo: "The Slow Rush", portada: "slowrush.jpeg" }
    ]
  },
  {
    name: "Duran Duran",
    img: "duranduran.jpg",
    info: "Banda británica de pop y rock, pioneros del new wave y synth-pop en los años 80.",
    estilo: "Pop / New Wave",
    audio: "duranduran_comeundone.mp3",
    lyrics: "Hungry like the wolf...\nIn the night I hear them growl...",
    discos: [
      { titulo: "Rio", portada: "rio.jpeg" },
      { titulo: "Future Past", portada: "future_past.jpeg" }
    ]
  },
  {
    name: "Proyecto Lazarus",
    img: "proyectolazarus.jpg",
    info: "Proyecto musical experimental de ambient, drone y paisajes sonoros oscuros e introspectivos.",
    estilo: "Ambient / Drone experimental",
    audio: "lazarus_ambient.mp3",
    lyrics: "(Instrumental)",
    discos: [
      { titulo: "A Mental Drama", portada: "amentaldrama.jpg" },
      { titulo: "HOME", portada: "home.jpg" }
    ]
  },
  {
    name: "Duki",
    img: "duki.webp",
    info: "Figura clave del trap argentino, con una evolución musical hacia lo melódico y lo emocional.",
    estilo: "Trap latino / Urbano",
    audio: "duki_goteo.mp3",
    lyrics: "Tengo el goteo, yeah...",
    discos: [
      { titulo: "Desde el Fin del Mundo", portada: "desde_el_fin.jpeg" },
      { titulo: "Temporada de Reggaetón 2", portada: "reggaeton2.jpeg" }
    ]
  },
  {
    name: "Kase O",
    img: "kaseo.jpeg",
    info: "Kase O es uno de los mayores referentes del rap en español, con letras profundas y estilo personal.",
    estilo: "Rap consciente / Hip Hop",
    audio: "kaseo_yemen.mp3",
    lyrics: "Las palabras pesan más que el plomo...",
    discos: [
      { titulo: "El Círculo", portada: "el_circulo.jpeg" },
      { titulo: "Jazz Magnetism", portada: "jazz_magnetism.jpeg" }
    ]
  },
  {
    name: "Ca7triel y Paco Amoroso",
    img: "ca7trielypacoamoroso.jpg",
    info: "Dúo de trap experimental, hip hop, electrónica y pop originario de Buenos Aires, Argentina.",
    estilo: "Trap Experimental",
    audio: "catriel_tetas.mp3",
    lyrics: "Let the knowledge invade your psyche...",
    discos: [
      { titulo: "Baño Maria", portada: "bañomaria.jpeg" },
      { titulo: "Papota", portada: "papota.jpeg" }
    ]
  },
  {
    name: "Brian Eno",
    img: "brianeno.jpeg",
    info: "Pionero de la música ambient. Creador de atmósferas electrónicas profundas e hipnóticas.",
    estilo: "Ambient / Experimental",
    audio: "brianeno_therewerebells.mp3",
    lyrics: "(Ambient instrumental)",
    discos: [
      { titulo: "Ambient 1: Music for Airports", portada: "music_for_airports.jpeg" },
      { titulo: "Another Green World", portada: "another_green_world.jpeg" }
    ]
  },
{
  name: "Kendrick Lamar",
  img: "kendricklamar.jpeg",
  info: "Rapero, compositor y productor estadounidense, considerado uno de los artistas más influyentes y talentosos de la música contemporánea. Ganador de múltiples premios Grammy y el primer artista de rap en recibir un Premio Pulitzer por su álbum 'DAMN.'",
  estilo: "Rap",
  audio: "Kendrick_tvoff.mp3",
  lyrics: "I got, I got, I got, I got...\nLoyalty, got royalty inside my DNA.",
  discos: [
    { titulo: "DAMN.", portada: "kendrick_damn.jpeg" },
    { titulo: "good kid, m.A.A.d city", portada: "kendrick_gkmc.jpeg" }
  ]
},
  {
    name: "Justice",
    img: "justice.jpg",
    info: "Dúo francés de música electrónica con toques de rock y estética retro-futurista.",
    estilo: "Electrónica / French House",
    audio: "justice_dance.mp3",
    lyrics: "Do the dance...\nJump on the floor...",
    discos: [
      { titulo: "† (Cross)", portada: "cross.jpeg" },
      { titulo: "Woman", portada: "woman.jpeg" }
    ]
  },
  {
    name: "Skrillex",
    img: "skrillex.jpeg",
    info: "Productor musical, DJ y cantante estadounidense, pionero del dubstep moderno y una figura clave en la música electrónica. Conocido por su estilo agresivo y por colaboraciones con artistas de diversos géneros.",
    estilo: "Dubstep / EDM",
    audio: "equinox.mp3",
    lyrics: "Shout to all my lost boys...\nBangarang!",
    discos: [
      { titulo: "Bangarang", portada: "skrillex_bangarang.jpeg" },
      { titulo: "Recess", portada: "skrillex_recess.jpeg" }
    ]
  },  
  {
    name: "Eminem",
    img: "eminem.jpeg",
    info: "Rapero, productor y actor estadounidense. Considerado uno de los mejores letristas de todos los tiempos, famoso por su velocidad, complejidad lírica y estilo provocador.",
    estilo: "Rap / Hip Hop",
    audio: "WithoutMe.mp3",
    lyrics: "You better lose yourself in the music...\nYou only get one shot...",
    discos: [
      { titulo: "The Marshall Mathers LP", portada: "marshallmatherslp.jpeg" },
      { titulo: "The Eminem Show", portada: "eminemshow.jpeg" },
    ]
  },
  {
    name: "Myke Towers",
    img: "myketowers.jpeg",
    info: "Cantante y compositor puertorriqueño de música urbana, fusiona reguetón, trap latino y rap, consolidándose como una de las figuras clave del género.",
    estilo: "Trap / Reguetón",
    audio: "diosa.mp3",
    lyrics: "Tú eres mi todo el plan...\nSiempre vas en mi playlist...",
    discos: [
      { titulo: "Easy Money Baby", portada: "easymoneybaby.jpeg" },
      { titulo: "Lyke Mike", portada: "lykemike.jpeg" },
    ]
  },
  {
    name: "Bruno Mars",
    img: "brunomars.jpeg",
    info: "Cantante, compositor y productor estadounidense, conocido por su increíble versatilidad, estilo retro-funk y shows llenos de energía. Ha ganado múltiples premios Grammy.",
    estilo: "Pop / Funk / R&B",
    audio: "bruno.mp3",
    lyrics: "Players only, come on...\nPut your pinky rings up to the moon!",
    discos: [
      { titulo: "Doo-Wops & Hooligans", portada: "doowops.jpeg" },
      { titulo: "24K Magic", portada: "24kmagic.jpeg" }
    ]
  }
     
];

  
  // =============================================
  // LISTA COMPARTIDA DE ARTISTAS DECORATIVOS
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
  