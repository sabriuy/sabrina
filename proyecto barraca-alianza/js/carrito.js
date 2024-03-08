const navToggle = document.querySelector(".toggle")
const navCategorias = document.querySelector(".navbar-categorias")

navToggle.addEventListener("click", ()=>{
navCategorias.classList.toggle("navbar-categorias_visible")
});



const prod = JSON.parse(localStorage.getItem("producto-en-carrito"));
const cart = document.getElementById("carrito-productos");


cart.innerHTML = '';


prod.forEach((producto) => {
   
    const productoElemento = document.createElement("div");
    productoElemento.className = "carrito-producto";
    productoElemento.innerHTML = `
        <img class="carrito-producto-imagen" src="${producto.img}" alt="">
        <div class="carrito-producto-titulo">
            <small>Nombre</small>
            <h3>${producto.nombre}</h3>
        </div>
        <div class="carrito-producto-precio">
            <small>Precio</small>
            <p>${producto.precio}</p>
        </div>
        <div class="carrito-producto-subtotal">
            <small>Subtotal</small>
            <p>${producto.precio}</p>
        </div>
        <button class="carrito-producto-eliminar"><i class="bi bi-trash3-fill"></i></button>
        `;
       
    cart.append(productoElemento);

    
});


const vaciarcarrito = () => {
    const botonvaciar = document.querySelector(".carrito-acciones-vaciar");
    botonvaciar.addEventListener("click", () => {
        const elcarrito = document.getElementById("carrito-productos");
        elcarrito.innerHTML = ''; // Limpiar el contenido del carrito
        localStorage.removeItem("producto-en-carrito"); // Vaciar el almacenamiento local
    });
};

vaciarcarrito();





  
