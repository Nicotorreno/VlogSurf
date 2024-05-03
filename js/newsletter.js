function agregaEvento() {
    // Obtener el elemento del botón de enviar
    let boton = document.getElementById("enviar");
    // Agregar un evento click al botón de enviar
    boton.addEventListener("click", suscribir);
}

function suscribir() {
    // Obtener los valores de los campos de nombre, apellido, correo y contraseña
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;

    // Verificar si algún campo está vacío
    if (nombre == '' || apellido == '' || correo == '' || password == '') {
        // Si algún campo está vacío, mostrar una alerta
        alert('Para suscribirte debes escribir todos los datos');
    } else {
        // Si todos los campos están completos, mostrar una alerta de suscripción exitosa
        alert('Te has suscrito correctamente');
        // Redirigir al usuario a la página "vlogsurfopen.html"
        location.href = "vlogsurfopen.html";
    }
}

// Ejecutar la función agregaEvento cuando la ventana se haya cargado completamente
window.onload = agregaEvento;