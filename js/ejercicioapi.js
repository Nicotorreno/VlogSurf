let conexion;
let div = document.getElementById("div");

function manejarEventos(){
    
    let boton = document.getElementById("botonNueva");
    boton.addEventListener("click",cargarBroma);

}

function cargarBroma(){
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = anadirBroma;
    conexion.open("GET","https://v2.jokeapi.dev/joke/Any?lang=es&blacklistFlags=nsfw,religious,political,racist,sexist", true);
    conexion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    conexion.send();
}

function anadirBroma(){
    if(conexion.readyState == 4 && conexion.status == 200){
        let datos = JSON.parse(conexion.responseText);
        console.log(datos);
        if(datos.type === "single"){
            let p = document.getElementById("parrafo");
            p.innerHTML = datos.joke;
            div.appendChild(p);
        }else{
           let p = document.getElementById("parrafo");
           p.innerHTML = datos.setup + ":" + datos.delivery;

        }


        }

    }























window.onload = manejarEventos;