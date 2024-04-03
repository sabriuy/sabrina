const navToggle = document.querySelector(".toggle")
const navCategorias = document.querySelector(".navbar-categorias")

navToggle.addEventListener("click", ()=>{
navCategorias.classList.toggle("navbar-categorias_visible")
});




const productos = [];
const url = "../js/objetos.json";

const traerproductos = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            productos.push(...data);
            console.log(data);
            displayProductos();
        } else {
            throw new Error("No se pudieron cargar los productos");
        }
    } catch (error) {
        contenedorProductos.innerHTML = ``;
        console.error(error);
    }
};


const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("contenedor-carrito");



const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'green',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: false,
  })
  

const displayProductos = () => {
    productos.forEach((producto) => {
        const contenido = document.createElement("div");
        contenido.className = "producto";
        contenido.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}">
            <p class="producto-titulo">${producto.nombre}</p>
            <h2 class="precio">${producto.precio}</h2>
            <button class="producto-ver" data-producto='${JSON.stringify(producto)}'>Agregar al carrito</button>`;
        contenedorProductos.append(contenido);
    });
};

    const carrito = (producto) => {
        localStorage.setItem("producto-en-carrito", JSON.stringify(productocarritoAgregado));
        productocarritoAgregado.push(producto);
        localStorage.setItem("producto-en-carrito", JSON.stringify(productocarritoAgregado));

        console.log("Productos en el carrito:", productocarritoAgregado);
    
    (async () => {
        await Toast.fire({
          icon: 'success',
          title: 'producto agregado en carrito',
        })
      })()
      
};


displayProductos();

document.addEventListener("DOMContentLoaded", () => {
    const botonesAgregar = document.querySelectorAll(".producto-ver");
    botonesAgregar.forEach((boton) => {
        boton.addEventListener("click", () => {
            const producto = JSON.parse(boton.getAttribute("data-producto"));
            carrito(producto);
            
        });
    });
}); 

traerproductos();



