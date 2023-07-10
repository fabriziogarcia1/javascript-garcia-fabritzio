const pintarCarrito = () =>{

    modalContatiner.innerHTML=("");
    modalContatiner.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    
    <p class="titulo-carrito">Carrito</p>
    `;
    modalContatiner.append(modalHeader);

    const modalbutton = document.createElement("p");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click",() =>{
      modalContatiner.style.display = "none";
    })

     modalHeader.append(modalbutton);

     carrito.forEach((producto) =>{
      let carritocontent = document.createElement("div");
      carritocontent.className = "modal-content";
      carritocontent.innerHTML = `
     <div class="imagen_carrito">
     <img src="${producto.imagen}">
     </div>
     <div>
     <p>${producto.nombre}</p>
     <p>$${producto.precio}</p>
     <p> cantidad: ${producto.cantidad}</p>
     <p>total: $${producto.cantidad * producto.precio}</p>
     </div>
     `;
    modalContatiner.append(carritocontent);
//variable de del boton X
    let eliminarProducto = document.createElement("span");

    eliminarProducto.innerText = "X";
    eliminarProducto.className = "delete-product";
    carritocontent.append(eliminarProducto);
//escuchador de evento
    eliminarProducto.addEventListener("click", eliminarProductoClick);
     });

     const total = carrito.reduce((acc, el) => acc + parseFloat(el.precio* el.cantidad), 0);
     
     const totalproducto = document.createElement("div");
     totalproducto.className = "total-content";
     totalproducto.innerHTML = `<P>Total a pagar : ${total} $ </p>`;
     modalContatiner.append(totalproducto);
    };   
    
    verCarrito.addEventListener("click", pintarCarrito);

    const  eliminarProductoClick = () => {
        const fonundId = carrito.find((Element) => Element.id);
        carrito = carrito.filter((carritoId) => {
        return carritoId !== fonundId;
     });
     pintarCarrito();
    };
  

  
