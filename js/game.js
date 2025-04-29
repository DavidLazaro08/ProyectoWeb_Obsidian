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
