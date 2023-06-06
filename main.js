/*

class producto {
   constructor (cillindrada, marca, nombre, precio){
   this.cillindrada = cillindrada;
   this.marca = marca;
   this.nombre = nombre;
   this.precio = precio;
   //this.metodoInformacion = function(){ alert("El vehiculo elegido es " + nombre +" " + marca + "su precio es de $" + precio);}

   }
}

// PRODUCTOS DE MOTOS 
const hondaWave = new producto( 110, "Honda ", "Wave", 900);
const yamahaCrypton = new producto(110, "Yamaha ", "Crypton", 950);
const yamahaYbr = new producto(125, "Yamaha ", "Ybr", 1100);
const hondaCb = new producto(125, "Honda ", "Cb", 1000);
const yamahaFz = new producto(150, "Yamaha", "Fz", 1400);
const HondaGlh = new producto(150, "Honda", "Glh", 1200);

// PRODUCTO DE CASCOS

function casco(marca, precio){
   this.marca = marca;
   this.precio = precio;

}

let usuario = prompt("Indique su nombre");

while (usuario === ""){
usuario = prompt("Error, Escriba un nombre")
}
alert("Hola "+  usuario + " Somos LogicMotors vendemos Motos y cascos al mejor precio del mercado");

let cilindradaDeLaMoto = parseInt(prompt("Elija que cilindrada va a querer tenemos 110cc, 125cc y 150cc (ponga solo el numero)"));

   if (cilindradaDeLaMoto ==  110){
    alert ("tenemos 2 motos de 110cc 1)Honda Wave y precio de $" + hondaWave.precio + " 2)Yamaha Crypton precio de $" + yamahaCrypton.precio + " dolares");
   }else if (cilindradaDeLaMoto ==  125){
   alert("tenemos  3)Honda cb, precio de $" + hondaCb.precio + " 4)Yamaha Ybr precio de $" + yamahaYbr.precio + " dolares");
   }else if (cilindradaDeLaMoto == 150){
   alert("opcion 5)Honda Glh precio de $" + HondaGlh.precio +  " 6)Yamaha fz precio de $" + yamahaFz.precio + " Precios en dolar");
}

let motoMarca = parseInt(prompt("Indique con un numero que moto queria Honda o Yamaha"));

switch(motoMarca) {
   case 1 : alert ("Usted eligio la moto " + hondaWave.marca + "precio de $" + hondaWave.precio);
   break
   case 2: alert ("usted eligio la moto " + yamahaCrypton.marca + "precio de $" + yamahaCrypton.precio);
   break
   case 3: alert("usted eligio la moto " + hondaCb.marca + "precio de $" + hondaCb.precio);
   break
   case 4: alert("usted eligio la moto " + yamahaYbr.marca + "precio de $" + yamahaYbr.precio);
   break
   case 5: alert("usted eligio la moto " + HondaGlh.marca + "precio de $" + HondaGlh.precio);
   break
   case 6: alert("usted eligio la moto " + yamahaFz.marca + "precio de $" + yamahaFz.precio);
   break
   case 7: alert("error escriba un numero valido");
   break
}
let talleCasco = prompt("Elegi el talle del Casco.(S, M, L, XL)")

const cascoMAC = ["MAC" ];
const cascoVertigo = ["Vertigo"]
const cascoHawk = ["Hawk"]

// metodo push para poner precio

cascoMAC.push("$100");
cascoVertigo.push("$80");
cascoHawk.push("$130")

alert("Elija un casco 1)" + cascoHawk );
alert("Elija un casco 2)" + cascoVertigo );
alert("Elija un casco 3)" + cascoMAC )



let cascoEleccion = prompt("elija el casco con un numero 1)hawk, 2)vertigo, 3)MAC");

if(cascoEleccion == 1){
   alert("el casco que elegiste es " + cascoMAC)
}  else if( cascoEleccion == 2){
   alert("elegiste el casco" + cascoVertigo)
} else (cascoEleccion == 3);{
   alert("Eelegiste el casco" + cascoMAC)

}

 






*/

