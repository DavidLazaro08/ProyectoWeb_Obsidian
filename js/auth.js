// Guardar usuarios en localStorage
const saveUser = (username, password) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
};

// Validar usuario al iniciar sesión
const validateUser = (username, password) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.some(user => user.username === username && user.password === password);
};

// Manejar registro
document.getElementById('registerForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('newUsername').value;
  const password = document.getElementById('newPassword').value;

  saveUser(username, password);
  alert('Usuario registrado con éxito');
  window.location.href = 'login.html';
});

// Manejar login
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (validateUser(username, password)) {
    localStorage.setItem('isLoggedIn', true); // Guardar estado de sesión
    alert('Inicio de sesión exitoso');
    window.location.href = 'index.html';
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});

// Manejar cierre de sesión
document.getElementById('logout')?.addEventListener('click', () => {
  localStorage.removeItem('isLoggedIn'); // Eliminar estado de sesión
  alert('Has cerrado sesión');
  window.location.href = 'login.html';
});