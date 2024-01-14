let abrirModal = document.getElementById("abrirModal");
let cierraModal = document.getElementById("cierraModal");
function agregaEvento() {
  abrirModal.addEventListener("click", abrir);
  cierraModal.addEventListener("click", cerrar);
}

function abrir() {
  let modal = document.getElementById("idModal");

  modal.style.display = "flex";
}

function cerrar() {
  let modal = document.getElementById("idModal");
  modal.style.display = "none";
}

window.onload = agregaEvento;

