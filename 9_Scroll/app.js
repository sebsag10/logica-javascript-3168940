const main = document.querySelector("#main");
const valorvertical = document.querySelector(".valor-vertical");
const valorhorizontal = document.querySelector(".valor-horizontal");
const pelota = document.querySelector("#pelota");

function verScroll() {
  let top = main.scrollTop;
  let left = main.scrollLeft;

  valorvertical.textContent = `V: ${top}`;
  valorhorizontal.textContent = `H: ${left}`;

  // Mover la pelota en la pantalla según scroll
  pelota.style.top = `${top}px`;
  pelota.style.left = `${left}px`;

  console.log("top:", top);
  console.log("left:", left);
}

main.addEventListener("scroll", verScroll);
