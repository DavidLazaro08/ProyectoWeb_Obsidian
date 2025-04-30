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


const cancionesExtras = [
  { titulo: "Tetas | Ca7riel & Paco Amoroso", archivo: "catriel_tetas.mp3" },
  { titulo: "Let it Happen | Tame Impala", archivo: "tameimpala_letithappen.mp3" },
  { titulo: "Genesis | Grimes", archivo: "Grimes_Genesis.mp3" },
  { titulo: "Come Undone | Duran Duran", archivo: "duranduran_comeundone.mp3" },
  { titulo: "Goteo | Duki", archivo: "duki_goteo.mp3" },
  { titulo: "Anuncio 1", archivo: "Ra1.mp3", artista: "Publicidad Radio" },
  { titulo: "Yemen | Kase.O", archivo: "kaseo_yemen.mp3" },
  { titulo: "Massive Denial | Proyecto Lazarus", archivo: "lazarus_ambient.mp3" },
  { titulo: "Anuncio 2", archivo: "Ra2.mp3", artista: "Publicidad Radio" },
  { titulo: "Dance | Justice", archivo: "justice_dance.mp3" },
  { titulo: "92 Explorer | Post Malone", archivo: "postmalone_tema.mp3" },
  { titulo: "The Less I Know I Better | Tame Impala", archivo: "tameimpala_lessiknow.mp3" },
  { titulo: "Anuncio 3", archivo: "Ra3.mp3", artista: "Publicidad Radio" },
  { titulo: "There Were Bells | Brian Eno", archivo: "brianeno_therewerebells.mp3" },
  { titulo: "Alas De Cristal | Avalanch", archivo: "alasdecristal.mp3" },
  { titulo: "Anuncio 4", archivo: "Ra4.mp3", artista: "Publicidad Radio" },
  { titulo: "Entre Dos Tierras | Héroes Del Silencio", archivo: "entredostierras.mp3" },
  { titulo: "Losing My Religion | R.E.M.", archivo: "LosingMyreligion.MP3" },
  { titulo: "Eye In The Sky | Alan Parson", archivo: "EyeInTheSky.mp3" },
  { titulo: "Es Épico | Canserbero", archivo: "EsEpico.MP3" },
  { titulo: "Lady | Modjo", archivo: "lady.mp3" },
  { titulo: "Como El Agua | Camarón", archivo: "Comoelagua.MP3" },
  { titulo: "Anuncio 5", archivo: "Ra5.mp3", artista: "Publicidad Radio" },
  { titulo: "La Pluie | Orelsan ft Stromae", archivo: "Lapluie.mp3" },
  { titulo: "Billie Jean | Michael Jackson", archivo: "BillieJean.MP3" },
  { titulo: "Anuncio 6", archivo: "Ra6.mp3", artista: "Publicidad Radio" },
  { titulo: "Put On Your Red Shoes | Ago", archivo: "PutOnYourRedShoes.MP3" },
  { titulo: "With You | Linkin Park", archivo: "WithYou.mp3" },
  { titulo: "Pienso En Tu Mira | Rosalía", archivo: "PiensoenTuMira.MP3" },
  { titulo: "Soldadito Marinero | Fito", archivo: "SoldaditoMarinero.mp3" },
  { titulo: "Anuncio 7", archivo: "Ra7.mp3", artista: "Publicidad Radio" },
  { titulo: "Under Pressure | Queen", archivo: "UnderPressure.MP3" },
  { titulo: "Anuncio 8", archivo: "Ra8.mp3", artista: "Publicidad Radio" },
  { titulo: "El Sitio De Mi Recreo | Antonio Vega", archivo: "ElSitioDeMiRecreo.mp3" },
  { titulo: "Vivir Para Contarlo | Doble V", archivo: "VivirParaContarlo.MP3" },
  { titulo: "Cheese | Juaninacka", archivo: "Cheese.mp3" },
  { titulo: "Rhythm Takes Control | 666", archivo: "RhythmTakesControl.MP3" },
  { titulo: "Enjoy The Silence | Depeche Mode", archivo: "EnjoyTheSilence.mp3" },
  { titulo: "Anuncio 9", archivo: "Ra9.mp3", artista: "Publicidad Radio" },
  { titulo: "Estando Contigo | El Barrio", archivo: "EstandoContigo.MP3" },
  { titulo: "Duende Garrapata | Los Delinqüentes", archivo: "DuendeGarrapata.mp3" },
  { titulo: "Never Again | Milk Inc", archivo: "NeverAgain.mp3" },
  { titulo: "Rainbow In The Sky | Starsplash", archivo: "RainbowInTheSky.mp3" },
  { titulo: "Alba | Antonio Flores", archivo: "Alba.MP3" },
  { titulo: "Dias De Verano | Amaral", archivo: "DiasDeVerano.mp3" },
  { titulo: "Anuncio 10", archivo: "Ra10.mp3", artista: "Publicidad Radio" },
  { titulo: "Todo Se Transforma | Jorge Drexler", archivo: "TodoSeTransforma.MP3" },
  { titulo: "Tambores De Guerra | Manuel Carrasco", archivo: "TamboresDeGuerra.mp3" },
  { titulo: "Crawling | Linkin Park", archivo: "Crawling.mp3" },
  { titulo: "Pop | N Sync", archivo: "Pop.MP3" },
  { titulo: "Rosa María | Maita Vende Ca", archivo: "RosaMaria.mp3" },
  { titulo: "Youth Of The Nation | P.O.D.", archivo: "YouthOfTheNation.MP3" },
  { titulo: "Anuncio 11", archivo: "Ra11.mp3", artista: "Publicidad Radio" },
  { titulo: "Maldito Duende | Héroes Del Silencio", archivo: "MalditoDuende.mp3" },
  { titulo: "On And On | Yanou Presents Do", archivo: "OnAndOn.MP3" },
  { titulo: "Rollin | Limp Bizkit", archivo: "Rollin.mp3" },
  { titulo: "Anuncio 12", archivo: "Ra12.mp3", artista: "Publicidad Radio" },
  { titulo: "Perdido En La Ciudad | M-Clan", archivo: "Perdidoenlaciudad.MP3" },
  { titulo: "Sucede | Extremoduro", archivo: "Sucede.mp3" },
  { titulo: "Two Enemigos | Ghostpell", archivo: "TwoEnemigos.MP3" },
  { titulo: "Puta | Extremoduro", archivo: "Puta.mp3" },
  { titulo: "Tus Labios Pa Mi | Niña Pastori", archivo: "TusLabiosPaMi.mp3" },
  { titulo: "Anuncio 13", archivo: "Ra13.mp3", artista: "Publicidad Radio" },
  { titulo: "Tengo | Queco", archivo: "Tengo.mp3" },
  { titulo: "Andaluz De Nacimiento | Hora Zulu", archivo: "Andaluzdenacimiento.MP3" },
  { titulo: "Livin a lie | Milk Inc", archivo: "livinalie.mp3" },
  { titulo: "Beautiful World | Cold Play", archivo: "BeautifulWorld.MP3" },
  { titulo: "Medieval | Tierra Santa", archivo: "Medieval.mp3" },
  { titulo: "Crawling | Linkin Park", archivo: "Crawling.mp3" },
  { titulo: "Without Me | Eminem", archivo: "WithoutMe.mp3" },
  { titulo: "The Lazy Song | Bruno Mars", archivo: "bruno.mp3" },
  { titulo: "Diosa | Mike Towers", archivo: "diosa.mp3" },
  { titulo: "First Of The Year | Skrillex", archivo: "equinox.mp3" },
  { titulo: "TV Off | Kendrick Lamar", archivo: "Kendrick_tvoff.mp3" },
  { titulo: "Shape of You | Ed Sheeran", archivo: "EdShape.mp3" },
  { titulo: "Invisible | Duran Duran", archivo: "DuranInvisible.mp3" }
];
 
const reproductor = document.getElementById("reproductorGlobal");
const btnAleatorio = document.getElementById("btnAleatorio");
const etiquetaNombre = document.getElementById("cancionActual");

btnAleatorio.addEventListener("click", () => {
  const aleatoria = cancionesExtras[Math.floor(Math.random() * cancionesExtras.length)];
  reproductor.src = "assets/audio/" + aleatoria.archivo;
  reproductor.play();
  etiquetaNombre.textContent = aleatoria.titulo;
});

reproductor.addEventListener("ended", () => {
  const aleatoria = cancionesExtras[Math.floor(Math.random() * cancionesExtras.length)];
  reproductor.src = "assets/audio/" + aleatoria.archivo;
  reproductor.play();
  etiquetaNombre.textContent = aleatoria.titulo;
});

// Scroll animado dentro de artistas decorativos
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollAbajo");
  const contenedor = document.getElementById("artistasDecorativos");

  if (scrollBtn && contenedor) {
    scrollBtn.addEventListener("click", () => {
      contenedor.scrollBy({
        top: 200,
        behavior: "smooth"
      });
    });
  }
});




