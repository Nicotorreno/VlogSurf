let cierraModalHawai;
let btnHawai;
let cierraModalAustralia;
let btnAustralia;
let cierraModalNazare;
let btnNazare;

function agregaEvento(){

cierraModalHawai = document.getElementById("cierraModalHawai");
btnHawai = document.getElementById("btnHawai");
cierraModalAustralia = document.getElementById("cierraModalAustralia");
btnAustralia = document.getElementById("btnAustralia");
cierraModalNazare = document.getElementById("cierraModalNazare");
btnNazare = document.getElementById("btnNazare");

cierraModalHawai.addEventListener("click", cerrarModalHawai);
btnHawai.addEventListener("click", abrirModalHawai);
cierraModalAustralia.addEventListener("click", cerrarModalAustralia);
btnAustralia.addEventListener("click", abrirModalAustralia);
cierraModalNazare.addEventListener("click", cerrarModalNazare);
btnNazare.addEventListener("click", abrirModalNazare);
}

function abrirModalHawai(){
    let modal = document.getElementById("idModalHawai");

    modal.style.display = "block";
    modal.style.justifyContent = "center";
    cerrarModalAustralia();
    cerrarModalNazare();
}

function cerrarModalHawai(){
    let modal = document.getElementById("idModalHawai");
    modal.style.display = "flex";
    modal.style.display = "none";
}

function abrirModalAustralia(){
    let modal = document.getElementById("idModalAustralia");

    modal.style.display = "block";
    modal.style.justifyContent = "center";
    cerrarModalHawai();
    cerrarModalNazare();
}

function cerrarModalAustralia(){
    let modal = document.getElementById("idModalAustralia");
    modal.style.display = "flex";
    modal.style.display = "none";
}

function abrirModalNazare(){
    let modal = document.getElementById("idModalNazare");

    modal.style.display = "block";
    modal.style.justifyContent = "center";
    cerrarModalHawai();
    cerrarModalAustralia();
}

function cerrarModalNazare(){
    let modal = document.getElementById("idModalNazare");
    modal.style.display = "none";
}

window.onload = function(){
    agregaEvento();;
};


