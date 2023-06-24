
const sectionDeProductos = document.querySelector("#mainDiv");

fetch("../JS/producto.json")
    .then(response => response.json())
    .then(data => {
        mostrarProductos(data);
    })

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
                <button class ="agregar-producto">"Comprar"</button>

            </div>
        `;
        sectionDeProductos.append(div);
    });
};
const marcaButtons = document.querySelectorAll(".agregar-producto");

marcaButtons.forEach(button => {
  button.addEventListener("click", () => {
    Toastify({
      text: "Producto agregado",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #2f0170, #010b33)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
});});
 