//let h1 = document.getElementsByTagName("h1");
//h1[0].innerHTML = "Hola desde Js";//
//$("h1").html("Hola desde Jquery");//
//$(".parrafoGrande").html("Hola desde Jquery");//
//$(document).ready(function(){
  //  console.log("listo")
//});//

$(document).ready(function(){
  //  $("#parrafoPequeno").click(function(){
      //   $(this).hide();
  //  });
 // $("#flip").click(function(){
   //   $("#panel").slideToggle(1000);
 // });

  //$("#para").click(function(){
  //  $("#panel").stop();
//});
  
$("#contenido").append("<h1>Hola que tal como estas</h1>");
$("#contenido").prepend("<h1>Hasta luego</h1>");

 
});