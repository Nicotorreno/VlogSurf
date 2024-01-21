let posicion = window.pageXOffset;   //le dice a la variable en la posición inical del scroll donde estamos

    function capturaScroll(){
        let posicionActual = window.pageYOffset;
        if(posicion == posicionActual){
           document.getElementById("navBar").style.top = "0";
        }else{
            document.getElementById("navBar").style.top = "-40px";

        }
    
    }
    function agregaEvento(){
        let navBar = document.getElementById("navBar");
        navBar.addEventListener ("mouseenter", entraRaton);
        navBar.addEventListener ("mouseleave", saleRaton);
    }

   function entraRaton(){
      document.getElementById("navBar").style.top ="0";
}

   function saleRaton(){
    if(window.pageXOffset !=0){
      document.getElementById("navBar").style.top ="-40px";
    }
}

    
    window.onscroll = capturaScroll;
    window.onload = agregaEvento;