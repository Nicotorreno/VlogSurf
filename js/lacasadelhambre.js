function agregarEventos(){
    let linklPoliticaPrivacidad = document.getElementById("linkPrivacidad");
    linklPoliticaPrivacidad.addEventListener("click",abrirModal);
    let aceptarModal = document.getElementById("aceptaModal");
    aceptarModal.addEventListener("click",aceptaCierraModal);
    let rechazarModal = document.getElementById("rechazaModal");
    rechazarModal.addEventListener("click",rechazaCierraModal);
    let menuHamburguesa = document.getElementsByClassName("fa-bars");
    menuHamburguesa[0].addEventListener("click",abrirMenu);
    

}

function abrirModal(e){
    e.preventDefault();
    let modal = document.getElementById("politicaPrivacidad");
    modal.style.display = "block";
}


function aceptaCierraModal(){
    let modal = document.getElementById("politicaPrivacidad");
    modal.style.display = "none";
}

function rechazaCierraModal(){
    window.location.replace("https://www.w3chools.com/");


}

function abrirMenu (){
    let nav = document.getElementById("nav");
    if(nav.className == ""){
        nav.className += "responisve";
    }else{
        nav.className ="";
    }
}






window.onload = agregarEventos;