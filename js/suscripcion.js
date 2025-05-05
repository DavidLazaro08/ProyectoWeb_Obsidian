// Mostrar el nombre del usuario en el header (solo si está logueado)
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const nombreUsuario = document.getElementById('nombreUsuario');
  
    if (user && nombreUsuario) {
      nombreUsuario.textContent = user.username;
    } else if (nombreUsuario) {
      nombreUsuario.textContent = 'Invitado';
    }
  });
  