document.getElementById('formulario').addEventListener('submit', function (event) {
    // Evitar que el formulario se envíe de forma tradicional
    event.preventDefault();

    // Guardar el estado de "formulario_enviado" en localStorage
    localStorage.setItem('formulario_enviado', 'true');

    // Redirigir a la página de inicio después de enviar
    window.location.href = 'inicio.html';
});
