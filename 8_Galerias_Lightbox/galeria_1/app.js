// Selección de elementos del DOM
const titulo = document.querySelector(".titulo");
const contenedor = document.querySelector("#contenedor");
const botonSig = document.querySelector(".botonSig");
const botonAnt = document.querySelector(".botonAnt");

// Lista de títulos
const titulos = [
  "Primera imagen",
  "Segunda imagen",
  "Tercera imagen",
  "Cuarta imagen",
  "Quinta imagen",
];

let i = 0; // empezamos en la primera imagen

// Función para ir a la siguiente imagen
function next() {
  i++;
  if (i >= titulos.length) {
    i = 0; // Reinicia cuando llega al final
  }
  actualizarSlider();
}

// Función para ir a la imagen anterior
function prev() {
  i--;
  if (i < 0) {
    i = titulos.length - 1; // Vuelve a la última
  }
  actualizarSlider();
}

// Actualiza el título y el desplazamiento del slider
function actualizarSlider() {
  titulo.textContent = titulos[i];
  contenedor.style.marginLeft = `-${400 * i}px`;
}

// Eventos de los botones
botonAnt.addEventListener("click", prev);
botonSig.addEventListener("click", next);
