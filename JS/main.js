
const sectionDeProductos = document.querySelector("#mainDiv");
const marcaButtons = document.querySelectorAll(".agregarproducto");
const verCarrito = document.getElementById("verCarrito");
const modalContatiner = document.getElementById("modal-container");


let carrito = []; //carrito vacio aca va estar lo que el usuario sellecione de perfumes


fetch("../JS/producto.json")
  .then(response => response.json())
  .then(data => {
    mostrarProductos(data);
  });

function mostrarProductos(productos) {
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("card_perfume");
    div.innerHTML = `
      <div class="div_img">
        <img src="${producto.img}" class="imagen_card" alt="${producto.nombre}">
      </div>
      <div class="div_parrafo">
        <p class="Titulo_perfume">${producto.nombre}</p>
        <p>Precio: $${producto.precio}</p>
        <p>${producto.descripcion}</p>                
        
      </div>
    `;
    sectionDeProductos.append(div);
    
    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.classList.add("agregarproducto");
    div.append(comprar);

    comprar.addEventListener("click", () =>{

      const repetirProducto = carrito.some((repetirProducto) => repetirProducto.id === producto.id);
      if (repetirProducto){
        carrito.map((prod) => {
          if(prod.id === producto.id){
            prod.cantidad++;
          }
        });
      }else{

      carrito.push({
        id : producto.id,
        imagen : producto.img,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: producto.cantidad,
      });
    }
    });

  });


  
  sectionDeProductos.addEventListener("click", event => {
    const target = event.target;
    if (target.classList.contains("agregarproducto") || target.classList.contains("agregarproducto-dinamico")) {
      Toastify({
        text: "Producto agregado",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #2f0170, #010b33)",
        },
        onClick: function() {} // Callback after click
      }).showToast();
    }
  });
  
};
