
function producto(cillindrada, marca, nombre, precio){
   this.cillindrada = cillindrada;
   this.marca = marca;
   this.nombre = nombre;
   this.precio = precio;
}
// PRODUCTOS DE MOTOS 
const hondaWave = new producto( 110, "Honda ", "Wave", 900);
const yamahaCrypton = new producto(110, "Yamaha ", "Crypton", 950);
const yamahaYbr = new producto(125, "Yamaha ", "Ybr", 1100);
const hondaCb = new producto(125, "Honda ", "Cb", 1000);
const yamahaFz = new producto(150, "Yamaha", "Fz", 1400);
const HondaGlh = new producto(150, "Honda", "Glh", 1200);

// PRODUCTO DE CASCOS
function casco(marca, talle, precio){
   marca = marca;
   talle = talle;
   precio = precio;
}
const cascoMac = new casco("Mac", "L", 100);
const cascoVertigo = new casco("Vertigo", "L",70);
const cascoHawk = new casco("Hawk", "L", 120);

let usuario = prompt("Indique su nombre");

while (usuario === ""){
usuario = prompt("Error, Escriba un nombre")
}
alert("Hola "+  usuario + " Somos LogicMotors vendemos Motos y cascos al mejor precio del mercado");

let cilindradaDeLaMoto = parseInt(prompt("Elija que cilindrada va a querer tenemos 110cc, 125cc y 150cc (ponga solo el numero)"));

   if (cilindradaDeLaMoto ==  110){
    alert ("tenemos 2 motos de 110cc; marca Honda y precio de $" + hondaWave.precio + " y la Yamaha Crypton precio de $" + yamahaCrypton.precio + " dolares");
   }else if (cilindradaDeLaMoto ==  125){
   alert("tenemos 2 motos de 125cc, Honda cb, precio de $" + hondaCb.precio + "y la Yamaha Ybr precio de $" + yamahaYbr.precio + " dolares");
   }else if (cilindradaDeLaMoto == 150){
   alert("opcion 1)Honda Glh precio de $" + HondaGlh.precio +  " 2)Yamaha fz precio de $" + yamahaFz.precio + " Precios en dolar");
}


 //OPCION DE LA MOTO QUE ELIGIO 

 
function sumaPrecioMotoCasco(){
   casco + moto
}







