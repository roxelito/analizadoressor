const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
// script.js

document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir que el formulario se envíe de la forma tradicional

    // Aquí podrías agregar validaciones del formulario si lo necesitas
    // Por ejemplo:
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;

    if (nombre && email && contraseña) {
        // Redirige a la página inicio.html cuando el formulario es válido
        window.location.href = 'inicio.html';
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
