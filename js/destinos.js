let cierraModalHawai;
let btnHawai;
let cierraModalAustralia;
let btnAustralia;
let cierraModalNazare;
let btnNazare;

function agregaEvento(){
// Asigna los elementos del DOM a las variables declaradas anteriormente
cierraModalHawai = document.getElementById("cierraModalHawai");
btnHawai = document.getElementById("btnHawai");
cierraModalAustralia = document.getElementById("cierraModalAustralia");
btnAustralia = document.getElementById("btnAustralia");
cierraModalNazare = document.getElementById("cierraModalNazare");
btnNazare = document.getElementById("btnNazare");
// Agrega los eventos de clic a los botones y elementos que cierran los modales
cierraModalHawai.addEventListener("click", cerrarModalHawai);
btnHawai.addEventListener("click", abrirModalHawai);
cierraModalAustralia.addEventListener("click", cerrarModalAustralia);
btnAustralia.addEventListener("click", abrirModalAustralia);
cierraModalNazare.addEventListener("click", cerrarModalNazare);
btnNazare.addEventListener("click", abrirModalNazare);
}

function abrirModalHawai(){
    // Obtiene el modal de Hawai por su ID
    let modal = document.getElementById("idModalHawai");

    modal.style.display = "block";
    modal.style.justifyContent = "center";
     // Cierra los otros modales
    cerrarModalAustralia();
    cerrarModalNazare();
}

function cerrarModalHawai(){
    // Obtiene el modal de Hawai por su ID y lo oculta
    let modal = document.getElementById("idModalHawai");
    modal.style.display = "flex";
    modal.style.display = "none";
}

function abrirModalAustralia(){
    // Obtiene el modal de Australia por su ID
    let modal = document.getElementById("idModalAustralia");
    // Muestra el modal y ajusta su estilo 
    modal.style.display = "block";
    modal.style.justifyContent = "center";
    // Cierra los otros modales
    cerrarModalHawai();
    cerrarModalNazare();
}

function cerrarModalAustralia(){
    // Obtiene el modal de Australia por su ID y lo oculta
    let modal = document.getElementById("idModalAustralia");
    modal.style.display = "flex";
    modal.style.display = "none";
}

function abrirModalNazare(){
    // Obtiene el modal de Nazare por su ID
    let modal = document.getElementById("idModalNazare");
    // Muestra el modal y ajusta su estilo
    modal.style.display = "block";
    modal.style.justifyContent = "center";
    // Cierra los otros modales
    cerrarModalHawai();
    cerrarModalAustralia();
}

function cerrarModalNazare(){
    // Obtiene el modal de Nazare por su ID y lo oculta
    let modal = document.getElementById("idModalNazare");
    modal.style.display = "none";
}

window.onload = function(){
    agregaEvento();;
};


