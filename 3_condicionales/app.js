// let carro = 30000000
// let dinero_suficiente = 30000000
// let dinero_insuficiente = 29000000

// // Condición (si tengo mas de 30 millones puedo compprar el carro)
// if (dinero_suficiente>= carro) {
// console.log("¡puedo comprar el carro!")
// if (dinero_insuficiente<carro)
//     console.log("no lo puedo comprar");
// }




// let nombre = prompt("¿Cuál es tu nombre?");
// var edad = parseInt(prompt("¿Cuál es tu edad?"));

// if (edad >= 18) {
// alert(nombre + " puede ingresar a la discoteca.");
// } else {
// alert(nombre + " no puede ingresar a la discoteca.");
// }

// if (nombre === "Mario" || nombre === "Carlos") {
// alert(nombre + " puede ingresar a VIP.");
// }


// Pedimos los datos al usuario
let estatura = Number(prompt("Ingresa tu estatura en cm:"));
let velocidad = Number(prompt("Ingresa tu velocidad en km/h:"));
let edad = Number(prompt("Ingresa tu edad:"));

// Verificamos si cumple con los requisitos de estatura y velocidad
if (estatura >= 170 && velocidad >= 27) {
  // Si cumple, evaluamos la edad
if (edad < 18) {
alert("¡Puedes ingresar al equipo en las divisiones menores!");
} else {
alert("¡Puedes ingresar al equipo profesional!");
}
} else {
alert("Lo sentimos, no cumples con los requisitos para ingresar al equipo.");
}
