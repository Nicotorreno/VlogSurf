
let cierraModal;
let suscribirModal;

function agregaEvento(){

cierraModal = document.getElementById("cierraModal");
suscribirModal = document.getElementById("suscribir");


cierraModal.addEventListener("click", cerrar);
suscribirModal.addEventListener("click", suscribir);
}

function abrir(){
    let modal = document.getElementById("idModal");

    modal.style.display = "flex";
}

function cerrar(){
    let modal = document.getElementById("idModal");
    modal.style.display = "none";
}

function suscribir(){
    let correoModal = document.getElementById("correoModal");
    let passModal = document.getElementById("passModal");
    if(correoModal.value == ''|| passModal.value == '')  {
        alert('Para suscribirte debes escribir un correo y una contraseña');
    }else{
        alert('Te has suscrito correctamente');
    }
}
window.onload = function(){
    agregaEvento();
    setTimeout(abrir, 2000);
};



