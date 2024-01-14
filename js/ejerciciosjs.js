
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");
let fechaNac = document.getElementById("fechaNac");


function agregaEventos(){
  
 nombre.addEventListener("change",compruebaNombre);
apellido.addEventListener("change",compruebaApellido);
 edad.addEventListener("change",compruebaEdad); 
 fechaNac.addEventListener("change",compruebaFecha); 
  
}
function compruebaNombre(){
    let valorNombre = nombre.value;
    nombre.value = valorNombre.charAt(0).toUpperCase() + valorNombre.slice(1);
  

}

    function compruebaApellido(){
        let apellido = document.getElementById("apellido");
        apellido.value = apellido.value.replaceAll(" ","");

    }

    function compruebaEdad(){
        if(edad.value < 18){
            alert("NOOOOOOOOO");
            edad.style.backgroundColor ="red";
            edad.style.border = "1px solid black";
            edad.value ="";
        }else{
            edad.style.backgroundColor ="green";
        } 
    }

    function compruebaFecha(){
        let fecha = fechaNac.value.split("-");
        if(parseInt(fecha[0])>=2023){
            alert("Fecha no válida");
            fechaNac ="";
        }

      //  console.log(fechaNac.value);
    }


window.onload = agregaEventos;

