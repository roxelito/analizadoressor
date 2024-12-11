document.getElementById("signup-form").addEventListener("submit", function(event) {
    // Prevenir el comportamiento por defecto del formulario (para evitar que se recargue la página)
    event.preventDefault();
    
    // Redirigir a inicio.html
    window.location.href = "inicio.html";
});
