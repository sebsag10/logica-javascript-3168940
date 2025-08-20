//PUNTO 1

/* let numero=Number(prompt("Dame un numero, mi vida❤️"))

if (numero > 0){alert("Tu numero es positivo baby, brr...");}
else if(numero < 0){alert("Tu numero es negativo, mi amor xd");}
else alert("Tu numero es cero jaja") */

//=====================================================================

// PUNTO 2

/* let numero_1 = Number(prompt("Dame un numero, mi vida❤️"))
let numero_2 = Number(prompt("Dame otro numero, mi amor❤️"))

if (numero_1>0){alert("El primer numero es positivo, bebe :"+numero_1)}

if (numero_2>0){alert("El segundo numero es positivo, cariño :"+numero_2)}
 */
// =====================================================================

// PUNTO 3

// let numero_1 = Number(prompt("Dame un numero, mi vida❤️"));
// let numero_2 = Number(prompt("Dame otro numero, mi amor❤️"));

// if (numero_1 === numero_2) {
//   let resultado = numero_1 * numero_2;
//   {
//     alert(
//       "el resultado de la multiplicacion de los dos valores es " + resultado
//     );
//   }
// }

//  if (numero_1 > numero_2) {
//    let resta = numero_1 - numero_2;
//    alert("el resultado de la resta es: " + resta);
//  } else {
//    let suma = numero_1 + numero_2;
//    alert("El resultado de la suma es: " + suma);
//  }
//PUNTO 4
// alert ("Precio del articulo 5.99 dollars")
// let pago=Number(prompt("con cuanto me vas a pagar")
//

// if (pago>5.99){
//   let resta=(pago-5.99)
//   alert("Tu devuelta es: "+resta+" dollars")
// }
// else if (pago<5.99)
// {alert("Disculpa, tu dinero es insuficiente para comprar el articulo")}
// else {
//   alert("Pagaste el valor exacto, no hay devuelta");
// }
// =====================================================================

//PUNTO 5
// let vacunas=Number(prompt("Numero De Vacunas Aplicadas En el dia"))
// let costo=Number(prompt("Costo De Cada Vacuna"))
// let costo_de_aplicacion=Number(prompt("costo de aplicación de cada vacuna"))

// let total_gastado=(costo+costo_de_aplicacion)*vacunas ;
// alert("El total de gastos diario en vacunas es: "+total_gastado)

// =====================================================================
//PUNTO 6
/* let camisas=70000
alert("Precio de camisas 70.000")
let cantidad_de_camisas=Number(prompt("Ingresa la cantidad de camisas que deseas comprar:"))

if (cantidad_de_camisas>=3){
  let total_de_la_compra=(camisas*cantidad_de_camisas)*0.80;
    alert ("Total de compra con 20% de descuento es. "+total_de_la_compra+"$")
  }else {
    let total_de_la_compra=(camisas*cantidad_de_camisas)*0.90;
    alert("Total de compra con 10% de descuento es. "+total_de_la_compra+"$")
  } */

//=====================================================================
//PUNTO 7

/* let valor_inicial=Number(prompt("Dinero en caja del tendero"));

let ventas=(800000*4)
alert("Ventas que obtuvo en el dia "+ventas+"$");

let dinero_total=valor_inicial+ventas;

let pago_acreedores=0.10;


let pago_hecho=dinero_total*pago_acreedores;{
  alert("pago hecho a los acreedores es: "+pago_hecho+"$")
}

let dinero_final=dinero_total-pago_hecho;{
  alert("dinero con el que termino es: "+dinero_final+"$")
}
 */
//=====================================================================
//PUNTO 8

/* let num1=Number(prompt("dame un numero"))
let num2=Number(prompt("dame un numero"))
let num3=Number(prompt("dame un numero"))
let num4=Number(prompt("dame un numero"))
let num5=Number(prompt("dame un numero"))

let suma=num1+num2+num3+num4+num5;

let promedio=suma/5
  alert("el promedio de los 5 numeros es "+promedio)
 */
//=====================================================================
//PUNTO 9
/* let num1=Number(prompt("Dame un numero"))
let num2=Number(prompt("Dame otro numero"))
let operacion=(prompt("Dame uno de estos simbolos (-,+,*,/.) para hacer alguna de las operaciones"))

let resultado;
if (operacion==="+"){
  resultado=num1+num2;
}
else if(operacion==="-"){
  resultado=num1-num2;
}
else if(operacion==="*"){
  resultado=num1*num2;
}
else if(operacion==="/"){
  resultado=num1/num2
}
else {
  alert("Operación no válida");
}
alert("el resultado de la operacion, es: "+Math.round(resultado))  */
//=====================================================================
//PUNTO 10
let num1 = Number(prompt("dame un numero"));
let num2 = Number(prompt("dame otro numero"));
let num3 = Number(prompt("dame un último numero"));

if (num1 === num2 && num1 === num3) {
  alert("todos son iguales");
} else {
  // Caso: num1 es el mayor
  if (num1 > num2 && num1 > num3) {
    alert(num1 + " este sería el numero mayor");
    if (num2 < num3) {
      alert(num2 + " este es el numero menor");
      alert(num3 + " este es el numero medio");
    } else if (num2 > num3) {
      alert(num3 + " este es el numero menor");
      alert(num2 + " este es el numero medio");
    } else {
      alert(num2 + " y " + num3 + " son iguales");
    }
  }

  // Caso: num2 es el mayor
  else if (num2 > num1 && num2 > num3) {
    alert(num2 + " este sería el numero mayor");
    if (num1 < num3) {
      alert(num1 + " este es el numero menor");
      alert(num3 + " este es el numero medio");
    } else if (num1 > num3) {
      alert(num3 + " este es el numero menor");
      alert(num1 + " este es el numero medio");
    } else {
      alert(num1 + " y " + num3 + " son iguales");
    }
  }

  // Caso: num3 es el mayor
  else if (num3 > num1 && num3 > num2) {
    alert(num3 + " este sería el numero mayor");
    if (num1 < num2) {
      alert(num1 + " este es el numero menor");
      alert(num2 + " este es el numero medio");
    } else if (num1 > num2) {
      alert(num2 + " este es el numero menor");
      alert(num1 + " este es el numero medio");
    } else {
      alert(num1 + " y " + num2 + " son iguales");
    }
  }
}


/* if (num1 === num2 && num1 === num3) {
  alert(num1 + " este numero es igual");
} else if (num1 === num2) {
  alert("el numero 1 es igual al numero 2");
} else if (num1 === num3) {
  alert("el numero 1 es igual al numero 3");
}

if (num2 === num1 && num2 === num3) {
  alert(num2 + " este numero es igual");
} else if (num2 === num1) {
  alert("el numero 2 es igual al numero 1");
} else if (num2 === num3) {
  alert("el numero 2 es igual al numero 3");
}

if (num3 === num2 && num3 === num1) {
  alert(num3 + " este numero es igual");
} else if (num3 === num1) {
  alert("el numero 3 es igual al numero 1");
} else if (num2 === num2) {
  alert("el numero 3 es igual al numero 2");
} */



/* 
if (num2 > num1 && num2 > num3) {
  alert(num2 + " este seria el numero mayor ");
} else if (num2 < num1 && num2 < num3) {
  alert(num2 + " este es el numero menor");
} else alert(num2 + " este es el numero medio");

if (num3 > num1 && num3 > num2) {
  alert(num3 + " este seria el numero mayor ");
} else if (num3 < num1 && num3 < num2) {
  alert(num3 + " este es el numero menor");
} else alert(num3 + " este es el numero medio");
 */
//=====================================================================
//PUNTO 11
/* let edad=Number(prompt("¿Què edad tienes?"))
let estatura=Number(prompt("¿Cual es tu estatura en cm?"))
let peso=Number(prompt("¿Cual es tu peso en kilogramos?"))

if (edad > 18 && estatura >170 && peso >= 50 && peso <= 90) {
  alert("El deportista ha sido seleccionado para el equipo ");
}

else {
    alert("El deportista NO cumple con los requisitos ");
} */
//=====================================================================
//PUNTO 12

/* let salario_min = 1000;  

alert("Salario mínimo actual: " + salario_min+" dollars"+'\n'+
"si tu salario es menor, entonces recibira un 10% de aumento"
);

let salario_del_trabajador = Number(prompt("Ingrese su salario actual:"));

let aumento=0.10*salario_del_trabajador


if (salario_del_trabajador<=salario_min){
  let salario_final=salario_del_trabajador+aumento;
  alert("su salario tuvo un aumento del 10%: "+salario_final+" dollars")
}
else{
alert("tu salario, no recibe nigun aumento")
} */
//=====================================================================
//PUNTO 13

/* let datos = [];

datos [0] = prompt("Dame el primer nombre")
datos [1] = prompt("Dame el segundo nobre")
datos [2] = prompt("Dame el tercer nombre")

alert("Los datos ingresados son " + datos){
} */

//=====================================================================
//PUNTO 14
/* let nombres = [];

while (true) {
  let nombre = prompt("Ingrese un nombre (o escriba 'salir' para terminar):");

  if (nombre.toLowerCase() === "salir") {
    break;
  }

  nombres.push(nombre);

  document.write(nombre + "<br>");
} */
//=====================================================================
//PUNTO 15
/* let correcto=false

while (!correcto){
  let num1=Math.floor(Math.random()*9)+1
  let num2=Math.floor(Math.random()*9)+1

  let resultado=num1*num2

  let respuesta=parseInt(prompt("cuanto es "+num1+" * "+num2))

  if (respuesta === null) {
        alert("Saliste del juego 😢");
        break; // fuerza salida del ciclo
    }

  else if (respuesta===resultado){
alert("felicidades, tines 600 iQ");
correcto=true;
  }
  else{
    alert("que pendejo xd")
  }
} */
