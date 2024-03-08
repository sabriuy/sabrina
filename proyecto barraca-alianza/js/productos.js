const navToggle = document.querySelector(".toggle")
const navCategorias = document.querySelector(".navbar-categorias")

navToggle.addEventListener("click", ()=>{
navCategorias.classList.toggle("navbar-categorias_visible")
});


class Producto {
    constructor(nombre, precio, cantidad, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.img = imagen;
    }
}

const producto1 = new Producto("ventana de aluminio 1x1", 5400, 15, "../imagenes/img productos/aluminio.jpg");
const producto2 = new Producto("chapa de zinc", 550, 39, "../imagenes/img productos/chapa.jpg");
const producto3 = new Producto("Varillas tratadas 8 pulgadas", 120, 100, "../imagenes/img productos/varilla.jpg");
const producto4 = new Producto("Puerta interior de madera", 4000, 20, "../imagenes/img productos/puertaint.jpg");
const producto5 = new Producto("Caños de pvc 110mm x 3mts", 750, 30, "../imagenes/img productos/cañopvc.jpg");
const producto6 = new Producto("Ladrillos", 40, 5000, "../imagenes/img productos/ladrillo.jpg");

const productos = [producto1, producto2, producto3, producto4, producto5, producto6];
const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("contenedor-carrito");

let productocarritoAgregado = JSON.parse(localStorage.getItem("producto-en-carrito")) || [];

const displayProductos = () => {
    productos.forEach((producto) => {
        const contenido = document.createElement("div");
        contenido.className = "producto";
        contenido.innerHTML = `
            <img class="producto-imagen" src="${producto.img}">
            <p class="producto-titulo">${producto.nombre}</p>
            <h2 class="precio">${producto.precio}</h2>
            <button class="producto-ver" data-producto='${JSON.stringify(producto)}'>Agregar al carrito</button>`;
        contenedorProductos.append(contenido);
    });
};

const carrito = (producto) => {

productocarritoAgregado.push(producto);
localStorage.setItem("producto-en-carrito", JSON.stringify(productocarritoAgregado));

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
