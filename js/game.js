const canciones = [
    {
        nombre: "Shape of You",
        artista: "Ed Sheeran",
        url: "assets/audio/EdShape.mp3"
    },
    {
        nombre: "Invisible",
        artista: "Duran Duran",
        url: "assets/audio/DuranInvisible.mp3"
    },
    {
        nombre: "Let it Happen",
        artista: "Tame Impala",
        url: "assets/audio/tameimpala_letithappen.mp3"
    },
    {
        nombre: "Billie Jean",
        artista: "Michael Jackson",
        url: "assets/audio/BillieJean.MP3"
    },
    {
        nombre: "Come Undone",
        artista: "Duran Duran",
        url: "assets/audio/duranduran_comeundone.mp3"
    },
    {
        nombre: "Eye In The Sky",
        artista: "Alan Parson",
        url: "assets/audio/EyeInTheSky.mp3"
    },
    {
        nombre: "Pienso En Tu Mira",
        artista: "Rosalía",
        url: "assets/audio/PiensoenTuMira.MP3"
    },
    {
        nombre: "Under Pressure",
        artista: "Queen",
        url: "assets/audio/UnderPressure.MP3"
    },
    {
        nombre: "Enjoy The Silence",
        artista: "Depeche Mode",
        url: "assets/audio/EnjoyTheSilence.mp3"
    },
    {
        nombre: "First Of The Year",
        artista: "Skrillex",
        url: "assets/audio/equinox.mp3"
    }
];


let cancionesGeneradas = 0;
let cancionesAcertadas = 0;
let cancionActual = {};
let inputRespuesta = document.getElementById("respuesta");
let botonVerificar = document.getElementById("verificarRespuesta");
let feedback = document.getElementById("feedback");
let contador = document.getElementById("contador");
let reproductor = document.getElementById("cancion");

function generarCancionAleatoria() {
    const cancion = canciones[Math.floor(Math.random() * canciones.length)];
    reproductor.src = cancion.url;
    cancionActual = cancion;
    cancionesGeneradas++;
    contador.innerHTML = `Acertadas/Generadas: ${cancionesAcertadas}/${cancionesGeneradas}`;
    feedback.textContent = ''; 
}

botonVerificar.addEventListener("click", function () {
    let respuestaUsuario = inputRespuesta.value.trim().toLowerCase();
    if (respuestaUsuario === cancionActual.nombre.toLowerCase()) {
        cancionesAcertadas++;
        feedback.textContent = "¡Correcto! 🎉";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Incorrecto. La canción era: ${cancionActual.nombre}`;
        feedback.style.color = "red";
    }
    contador.innerHTML = `Acertadas/Generadas: ${cancionesAcertadas}/${cancionesGeneradas}`;
    inputRespuesta.value = ''; 
    setTimeout(generarCancionAleatoria, 2000); 
});

generarCancionAleatoria();
