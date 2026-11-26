const formulario = document.querySelector("#formulario");
const entrada = document.querySelector("#entrada");
const lista = document.querySelector("#lista");
const contador = document.querySelector("#contador");

function actualizarContador() {
  const total = lista.children.length;
  contador.textContent = total + (total === 1 ? " tarea" : " tareas");
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // evita que la página se recargue

  const texto = entrada.value.trim();
  if (texto === "") return;

  const item = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;
  span.addEventListener("click", () => {
    item.classList.toggle("hecha"); // tachar / destachar
  });

  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Borrar";
  botonBorrar.addEventListener("click", () => {
    item.remove();
    actualizarContador();
  });

  item.append(span, botonBorrar);
  lista.append(item);

  entrada.value = "";
  actualizarContador();
});