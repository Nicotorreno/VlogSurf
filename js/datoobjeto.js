let objeto = {
    usuario1:[{nombre:"Nico",apellido:"Torreno"}],[{nombre:"Pepe",apellido:"Romero"}],
    
};
console.log(objeto.nombre[1].nombre); // poniendo [1].nombre para indicar que quiero Pepe

//.....................

let escuela={
    disenoweb:[
        {nombre:"Ester",apellido:"Pérez",cursos:3, imagen:img/img/...},
        {nombre:"Nico",apellido:"Torreño",cursos:1},
        {nombre:"Desi",apellido:"Angulo",cursos:3},
        {nombre:"Eric",apellido:"Guillén",cursos:1},
        {nombre:"Alvaro",apellido:"Gijón",cursos:2},
        {nombre:"Nelson",apellido:"Chakupewa",cursos:4},
        {nombre:"Duda",apellido:"Goncalves",cursos:3},
    ],
    profesor:"Javi"
};
console.log(escuela.disenoweb[2].nombre);  // con este console.log cogemos a Desi ya que pone [2] y al poner .nombre solo queremos el nombre


// si quisieramos más de un dato como por ejemplo nombre y apellido tendriamos que poner dos console.log uno para nombre y otro por ejemplo para apellido.
console.log(escuela.disenoweb[2].apellido);

for (let i = 0; i <escuela.disenoweb.length; i++) {
   console.log(escuela.disenoweb.[i].nombre)
    
}
for (let i = 0; i <escuela.disenoweb.length; i++) {
let p = document.createElement("p");
let br = document.createElement("br");
p.innerHTML = escuela.disenoweb[5].nombre;
let div = document.getElementById("div");
let imagen = document.createElement("img");
imagen.src = escuela.disenoWeb[i].imagenPerfil;
div.appendChild(p);
div.appendChild(imagen);
div.appendChild(br);
}


//.............................................


let conexion;
function cargaApi(){
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarJson;
    conexion.open("GET","https://pokeapi.co/api/v2/pokemon/pikachu", true);
    conexion.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    conexion.send();

}

function procesarJson(){
    if(conexion.readyState == 4 && conexion.status == 200){
        let datos = JSON.parse(conexion.responseText);
        console.log(datos);
    }
}


//USAR UNA API QUE NOS GUSTE Y HACER UNA PAGINA 













window.onload = CargaApi;


// for (let i = 0; i < escuela.disenoWeb.length; i++) {
  // let p = document.createElement("p");
  // let br = document.createElement("br");
  // p.innerHTML = escuela.disenoWeb[i].nombre;
  // p.style.fontSize = 30;
  // let div = document.getElementById("div");
  // let imagen = document.createElement("img");
  // imagen.src = escuela.disenoWeb[i].imagenPerfil;
  // div.appendChild(p);
  // div.appendChild(imagen);
  // div.appendChild(br);
//   for (let j = 0; j <
escuela.disenoWeb[i].cursos.length; j++) {
//     console.log(escuela.disenoWeb[i].nombre + ': '+escuela.disenoWeb[i].cursos[j])

//   }


// }