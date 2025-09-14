const formulario = document.querySelector("#customForm");
const inputNombre = document.querySelector("#nombre");
const listaColores = document.querySelector("#color");
const resultadoSection = document.querySelector("#resultado");
const formSection = document.querySelector("#form-section");
const saludo = document.querySelector("#saludo");
const equipoTexto = document.querySelector("#equipoTexto");
const animalImg = document.querySelector("#animalImg");
const cerrarSesionBtn = document.querySelector("#cerrarSesion");

const imagenes = {
  gatos: "gatos.webp",
  mapaches: "mapache.webp",
  perros: "perros.webp",
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!inputNombre.value.trim()) {
    alert("Por favor, ingresa tu nombre.");
    return;
  }
  if (!listaColores.value) {
    alert("Por favor, selecciona un color.");
    return;
  }
  const equipo = document.querySelector('input[name="equipo"]:checked');
  if (!equipo) {
    alert("Por favor, selecciona un equipo.");
    return;
  }

  // Cambiar color de fondo según selección
  document.body.style.backgroundColor = listaColores.value;

  // Mostrar resultados
  formSection.style.display = "none";
  resultadoSection.style.display = "block";

  saludo.textContent = `Hola, ${inputNombre.value}!`;
  equipoTexto.textContent = `Tu equipo favorito es: ${equipo.value}`;
  animalImg.src = imagenes[equipo.value];
  animalImg.alt = equipo.value;

  formulario.reset();
});

cerrarSesionBtn.addEventListener("click", () => {
  // Restaurar fondo blanco
  document.body.style.backgroundColor = "white";

  // Ocultar resultado y mostrar formulario
  resultadoSection.style.display = "none";
  formSection.style.display = "block";
});
