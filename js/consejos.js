let posicion = window.pageXOffset;   //le dice a la variable en la posición inical del scroll donde estamos

function capturaScroll() {
    // Captura la posición vertical actual del scroll
    let posicionActual = window.pageYOffset;
    // Comprueba si la posición actual es igual a la posición anterior
    if (posicion == posicionActual) {
        // Si es igual, muestra el navbar
        document.getElementById("navBar").style.top = "0";
    } else {
        // Si no es igual, oculta el navbar
        document.getElementById("navBar").style.top = "-40px";
    }
}

function agregaEvento() {
    // Agrega eventos de ratón al navbar
    let navBar = document.getElementById("navBar");
    navBar.addEventListener("mouseenter", entraRaton);
    navBar.addEventListener("mouseleave", saleRaton);
}

function entraRaton() {
    // Cuando el ratón entra en el navbar, lo muestra
    document.getElementById("navBar").style.top = "0";
}

function saleRaton() {
    // Cuando el ratón sale del navbar y la página no está en la parte superior,
    // lo oculta nuevamente
    if (window.pageXOffset != 0) {
        document.getElementById("navBar").style.top = "-40px";
    }
}

// Asigna la función capturaScroll al evento de desplazamiento de la ventana
window.onscroll = capturaScroll;
// Asigna la función agregaEvento al evento de carga de la ventana
window.onload = agregaEvento;