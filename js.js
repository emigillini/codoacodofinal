/*const prod = [];

let x = document.getElementById("boton");
x.addEventListener("click", () => {
  let num = 1;
  prod.push(num);
  console.log(prod);
});
*/

import { productos } from "./productos.js";

document.addEventListener("DOMContentLoaded", () => {
  let numRandom = Math.round( (Math.random() * 100000));
  let codigo = "XX " + numRandom + " ZZ";
  document.getElementById("codigo").innerText = codigo;
});

document.addEventListener("click", () => {
  let x = document.getElementById("butbanner");
  let bot = document.getElementById("banner");
  bot.style.display = "none";
});



const contenedorProductos = document.querySelector("#productos");

function mostrarProductos() {
  productos.forEach((producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("producto");

    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    tarjeta.appendChild(imagen);

    const nombre = document.createElement("h3");
    nombre.innerText = producto.nombre;
    tarjeta.appendChild(nombre);

    const descripcion = document.createElement("p");
    descripcion.innerText = producto.descripcion;
    tarjeta.appendChild(descripcion);

    const precio = document.createElement("p");
    precio.innerText = `$${producto.precio}`;
    tarjeta.appendChild(precio);

    contenedorProductos.appendChild(tarjeta);
  });
}

mostrarProductos();
