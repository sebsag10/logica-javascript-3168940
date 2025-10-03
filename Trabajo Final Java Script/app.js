const cardInicio = document.getElementById("inicio");
const img_1 = document.querySelector(".img_1 img");
const img_2 = document.querySelector("img_2 img");
const proyecto = document.getElementById("proyecto");
const Formulario=document.getElementById("Formulario")

cardInicio.addEventListener("mouseenter", () => {
  img_1.style.boxShadow = "0 0 20px 5px red";
  cardInicio.style.boxShadow = "0 0 20px 5px red";
});

cardInicio.addEventListener("mouseleave", () => {
  cardInicio.style.boxShadow = "none";
  img_1.style.boxShadow = "none";
});

Formulario.addEventListener("mouseenter", () => {
  Formulario.style.boxShadow = "0 0 20px 5px red";
});

Formulario.addEventListener("mouseleave", () => {
  Formulario.style.boxShadow = "none";
});


proyecto.addEventListener("mouseenter", () => {
  proyecto.style.boxShadow = "0 0 20px 5px red";
  img_2.style.boxShadow = "0 0 20px 5px red";
});

proyecto.addEventListener("mouseleave", () => {
  proyecto.style.boxShadow = "none";
  img_2.style.boxShadow = "none";
});

// 1. Captura de variables
const titulo = document.querySelector(".titulo");
const screen = document.querySelector(".screen");
const miniaturas = document.querySelector(".collage");
const descripcion = document.querySelector(".descripcion");

function cambiarImg(event) {
  if (!event.target.src) return;               // si no es imagen, salir
  titulo.textContent = event.target.name;      // cambia el título
  screen.src = event.target.src;               // cambia la imagen principal
  descripcion.textContent = event.target.dataset.text; // cambia la descripción
}

// Escucha clicks en el contenedor de miniaturas
miniaturas.addEventListener("click", cambiarImg);

document.getElementById("customForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const personaje = document.querySelector('input[name="personaje"]:checked').value;

  const saludo = document.getElementById("saludo");
  const descripcion = document.getElementById("descripcion");
  const personajeImg = document.getElementById("personajeImg");
})



