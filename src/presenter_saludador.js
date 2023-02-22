import sumar from "./sumador";

const nombre = document.querySelector("#nombre");

const form = document.querySelector("#saludador_form");
const div = document.querySelector("#resultado-div");


const genero = document.querySelector("#genero");
const form2 = document.querySelector("#genero_form");
const div2 = document.querySelector("#resultado-divGen");



form.addEventListener("submit", (event) => {
  event.preventDefault();
  genero = document.getElementById(genero);
  if(genero.value == "Masculino")
  {
    div.innerHTML = "<strong>Hola </strong>"  + "Sr." + nombre.value;
  }
  



});
