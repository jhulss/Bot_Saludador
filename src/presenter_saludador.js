import sumar from "./sumador";

const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const form = document.querySelector("#saludador_form");
const div = document.querySelector("#resultado-div");



//const form2 = document.querySelector("#genero_form");
//const div2 = document.querySelector("#resultado-divGen");



form.addEventListener("submit", (event) => {
  event.preventDefault();
    
    if ( genero.value == "Masculino" || genero.value == "masculino" || genero.value == "hombre" || genero.value == "varon")
    {
        div.innerHTML = "<strong>Hola </strong>"  + "Sr." + nombre.value;
    }
    if (genero.value == "Femenino" || genero.value == "femenino" || genero.value == "mujer" || genero.value == "dama")
    {
        div.innerHTML = "<strong>Hola </strong>"  + "Sra." + nombre.value;
    }
  
});
