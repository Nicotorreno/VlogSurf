
// Declaración de variables para los elementos del DOM
let cierraModal;
let suscribirModal;

// Función para agregar eventos a los elementos del modal
function agregaEvento() {
    // Obtener los elementos del DOM para el cierre del modal y la suscripción
    cierraModal = document.getElementById("cierraModal");
    suscribirModal = document.getElementById("suscribir");

    // Agregar eventos click a los elementos del modal
    cierraModal.addEventListener("click", cerrar);
    suscribirModal.addEventListener("click", suscribir);
}

// Función para abrir el modal
function abrir() {
    let modal = document.getElementById("idModal");
    modal.style.display = "flex"; // Mostrar el modal cambiando el estilo de display a flex
}

// Función para cerrar el modal
function cerrar() {
    let modal = document.getElementById("idModal");
    modal.style.display = "none"; // Ocultar el modal cambiando el estilo de display a none
}

// Función para suscribirse
function suscribir() {
    let correoModal = document.getElementById("correoModal");
    let passModal = document.getElementById("passModal");
    // Verificar si se han ingresado datos en el formulario de suscripción
    if (correoModal.value == '' || passModal.value == '') {
        // Si faltan datos, mostrar un mensaje de alerta
        alert('Para suscribirte debes escribir un correo y una contraseña');
    } else {
        // Si se han ingresado todos los datos, mostrar un mensaje de éxito
        alert('Te has suscrito correctamente');
    }
}

// Asignar la función agregaEvento al evento de carga de la ventana y abrir el modal después de 2 segundos
window.onload = function () {
    agregaEvento();
    setTimeout(abrir, 2000); // Abrir el modal después de 2000 milisegundos (2 segundos)
};



