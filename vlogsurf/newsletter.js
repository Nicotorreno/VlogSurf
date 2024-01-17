function agregaEvento(){
    let boton = document.getElementById("enviar");
    boton.addEventListener("click" , suscribir);

}

function suscribir(){
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let correo = document.getElementById("correo");
    let password = document.getElementById("password");


if(nombre.value == ''|| apellido.value == '' || correo.value == '' || password.value == ''){
    alert('Para suscribirte debes escribir todos los datos');
}else{
    alert('Te has suscrito correctamente');
    location.href="vlogsurfopen.html";
}

}

window.onload = agregaEvento;