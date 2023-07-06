const mujerperfume = document.querySelector("#mainWoman");
const marcaButtons = document.querySelectorAll(".agregarproducto");

fetch("../JS/productowoman.json")
  .then(response => response.json())
  .then(data => {
    mostrarProductos(data);
  });

function mostrarProductos(productomujer) {
  productomujer.forEach(producto => {
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
        <button class="alerttoasty agregarproducto">Comprar</button>
      </div>
    `;
    mujerperfume.append(div);
  });

  mujerperfume.addEventListener("click", event => {
    const target = event.target;
    if (target.classList.contains("alerttoasty") || target.classList.contains("agregarproducto-dinamico"))  {
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
  })}