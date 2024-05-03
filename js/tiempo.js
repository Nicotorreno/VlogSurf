// Función para capturar el desplazamiento de la página
function capturaScroll() {
    // Obtener la posición actual del desplazamiento vertical de la página
    let posicionActual = window.pageYOffset;
    // Comprobar si la posición de desplazamiento es la misma que la posición anterior
    if (posicion == posicionActual) {
        // Si la posición de desplazamiento no ha cambiado, mostrar el elemento de navegación
        document.getElementById("navBar").style.top = "0";
    } else {
        // Si la posición de desplazamiento ha cambiado, ocultar el elemento de navegación
        document.getElementById("navBar").style.top = "-40px";
    }
}

// Función para agregar eventos al elemento de navegación
function agregaEvento() {
    // Obtener el elemento de navegación
    let navBar = document.getElementById("navBar");
    // Agregar eventos de mouse al elemento de navegación
    navBar.addEventListener("mouseenter", entraRaton);
    navBar.addEventListener("mouseleave", saleRaton);
}

// Función para manejar el evento de entrada del ratón
function entraRaton() {
    // Mostrar el elemento de navegación cuando el ratón entra en él
    document.getElementById("navBar").style.top = "0";
}

// Función para manejar el evento de salida del ratón
function saleRaton() {
    // Ocultar el elemento de navegación cuando el ratón sale de él, si la página se ha desplazado
    if (window.pageXOffset != 0) {
        document.getElementById("navBar").style.top = "-40px";
    }
}

// Asignar la función capturaScroll al evento de desplazamiento de la ventana
window.onscroll = capturaScroll;
// Asignar la función agregaEvento al evento de carga de la ventana
window.onload = agregaEvento;
   