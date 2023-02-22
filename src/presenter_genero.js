import sumar from "./sumador";

const nombre = document.querySelector("#nombre");

const form = document.querySelector("#saludador_form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<strong>Hola </strong>"  + nombre.value;
});
