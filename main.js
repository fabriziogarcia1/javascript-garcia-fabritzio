

  const ProductoHombre = [
  {
    id: "01",
    Nombre: "Versace Eros Edp",
    img:"../Imagenes/versace.jpg",
    Marca: "Versace",
    precio: "55000",
    descripcion: "Notas de vainilla y menta",
  },
  {
    id: "02",
    Nombre: "Bad boy",
    img:"../Imagenes/bad_boy_portada.jpg",
    Marca: "Carolina Herrera",
    precio: "55000",
    descripcion: "Notas de vainilla y sandalo (Dulce)",
  },
  {
    id: "03",
    Nombre: "One Million",
    img:"../Imagenes/million.jpg",
    Marca: "Antonio Banderas",
    precio: "60000",
    descripcion: "Cuero y cardamomo",
  },
  {
    id: "04",
    Nombre: "kaiak oceano",
    img:"../Imagenes/oceano.jpg",
    Marca: "Natura",
    precio: "10000",
    descripcion: "toronja y algas marinas, especial para verano.",
  },
  {
    id: "05",
    Nombre: "Humor estelar",
    img:"../Imagenes/estelar.jpg",
    Marca: "Natura",
    precio: "7000",
    descripcion: "Piña y vainilla dulce.",
  },
  {
    id: "06",
    Nombre: "Kaiak vital",
    img:"../Imagenes/vital.jpg",
    Marca: "Natura",
    precio: "12000",
    descripcion: "Mandarina y naranja con un toque de Vainilla.",
  },
  {
    id: "07",
    Nombre: "Versace Eros Flame",
    img:"../Imagenes/flame.jpg",
    Marca: "Versace",
    precio: "55000",
    descripcion: "Mandarina y naranja con un toque de Vainilla.",
  },
  {
    id: "08",
    Nombre: "Dior Savage",
    img:"../Imagenes/dior.jpg",
    Marca: "Dior",
    precio: "80000",
    descripcion: "Potente aromatico ,ligeramente maduro.",
  },

];
const sectionDeProductos = document.querySelector("#mainDiv");

function cardPerfume() {
    ProductoHombre.forEach(ProductoHombre => {
        const div = document.createElement("div");
        div.classList.add("card_perfume");
        div.innerHTML = `
            <div class="div_img">
                <img src="${ProductoHombre.img}" class="imagen_card" alt="${ProductoHombre.Nombre}">
            </div>
            <div class="div_parrafo">
                <p class="Titulo_perfume">${ProductoHombre.Nombre}</p>
                
                <p>Precio: $${ProductoHombre.precio}</p>
                <button id = "toastify">informacion</button>
                <button class ="toastify">"Comprar"</button>

            </div>
        `;
        sectionDeProductos.append(div);
    });
};

cardPerfume();

const toastify = document.querySelectorAll("#toastify");

 toastify.addEventListener("click", () => {
     Toastify({
         text: "Click",
         duration: 3000,
         destination: "https://github.com/apvarun/toastify-js",
         newWindow: true,
         close: true,
         gravity: "bottom", // `top` or `bottom`
         position: "right", // `left`, `center` or `right`
         stopOnFocus: true, // Prevents dismissing of toast on hover
         style: {
           background: "linear-gradient(to right, #00b09b, #96c93d)",
         },
         onClick: function(){} // Callback after click
       }).showToast();
 });