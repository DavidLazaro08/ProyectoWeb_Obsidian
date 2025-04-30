// =============================================
// ARCHIVO: perfil.js
// Lógica del perfil de usuario
// =============================================

const inputImagen = document.getElementById("inputImagen");
const perfilImagen = document.getElementById("perfilImagen");
const perfilNombre = document.querySelector(".perfil-nombre");

// Al cargar la página, obtenemos el usuario actual
document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const imagenGuardada = localStorage.getItem("fotoPerfil");

  if (currentUser?.username) {
    perfilNombre.textContent = currentUser.username;
  }

  // Si hay una imagen en localStorage, usarla. Si no, usar imagen por defecto.
  perfilImagen.src = imagenGuardada || "assets/img/no_foto.webp";
});

// Cuando se cambia la imagen, la guardamos en localStorage
inputImagen.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const base64 = e.target.result;
      perfilImagen.src = base64;
      localStorage.setItem("fotoPerfil", base64); // Guardar imagen
    };
    reader.readAsDataURL(file);
  }
});
