
const navToggle = document.querySelector(".toggle")
const navCategorias = document.querySelector(".navbar-categorias")

navToggle.addEventListener("click", ()=>{
navCategorias.classList.toggle("navbar-categorias_visible")
});



let imagenes = [];
 imagenes[0] = "../imagenes/img fondo/fondo1.jpg";
 imagenes[1] = "../imagenes/img fondo/fondo2.jpg";
 imagenes[2] = "../imagenes/img fondo/fondo3.jpg";

let indiceImagenes = 0;
let tiempo = 2000;

function cambiarImagenes (){
    document.slider.src = imagenes[indiceImagenes];
    if(indiceImagenes<2){
        indiceImagenes++;
    }else{
        indiceImagenes = 0;
    }
}

setInterval(cambiarImagenes, tiempo);

cambiarImagenes();






