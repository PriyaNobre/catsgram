var btnAdd = document.querySelector("#add");

function cadastrarTarefa() {
  var inputTarefa = document.querySelector(".nova-tarefa");
  var ulLista = document.querySelector("ul");

  ulLista.insertAdjacentHTML("beforeend", "<li>" + inputTarefa.value + "</li>");

  inputTarefa.value = "";

  alert(inputTarefa.value);
}

btnAdd.addEventListener("click", cadastrarTarefa);
