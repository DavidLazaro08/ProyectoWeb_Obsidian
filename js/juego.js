document.addEventListener("DOMContentLoaded", () => {
    const artist = localStorage.getItem("selectedArtist");
  
    const songs = {
      artist1: {
        name: "Canción A",
        src: "audio/artist1-song.mp3",
        correctAnswer: "nombre de la canción 1"
      },
      artist2: {
        name: "Canción B",
        src: "audio/artist2-song.mp3",
        correctAnswer: "nombre de la canción 2"
      },
      artist3: {
        name: "Canción C",
        src: "audio/artist3-song.mp3",
        correctAnswer: "nombre de la canción 3"
      }
    };
  
    const audioElement = document.getElementById("audio");
    const result = document.getElementById("result");
    const checkBtn = document.getElementById("check");
    const guessInput = document.getElementById("guess");
  
    if (songs[artist]) {
      audioElement.src = songs[artist].src;
    } else {
      result.textContent = "Artista no encontrado. Vuelve al inicio.";
      checkBtn.disabled = true;
    }
  
    checkBtn.addEventListener("click", () => {
      const guess = guessInput.value.trim().toLowerCase();
      const correct = songs[artist].correctAnswer.toLowerCase();
      if (guess === correct) {
        result.textContent = "Correcto";
        result.style.color = "green";
      } else {
        result.textContent = "Intenta de nuevo.";
        result.style.color = "red";
      }
    });
  });
  