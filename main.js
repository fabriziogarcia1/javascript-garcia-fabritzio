
let nombre = prompt("Ingrese Su nombre ");
let emprendimiento = parseInt(prompt("ingrese su tipo de emprendimiento con un numero 1)empresa 2)pyme 3)emprendedor"));


if (emprendimiento == 1 ) { 
   alert ("Hola " + nombre + " Su prestamo puede ser de 70mil dolares");
} else if (emprendimiento == 2 ) {
  alert ("Hola " + nombre + " Su prestamo puede ser  de 20mil a 50mil dolares");}
   else if (emprendimiento == 3 ) {
alert ("Hola " + nombre + " Su prestamo puede ser hasta 20mil dolares");}
  else if (emprendimiento > 3){
   alert ("Numero incorrecto")
  }

  let prestamo = prompt("Cual es la cantidad de dinero que quiere? y nosotros le cotizaremos el interes")
function intereses(){
   let porcentaje = prestamo * 0.2;
 
   alert
 alert("El 20% de " + prestamo + " es " + porcentaje);
}
intereses();

