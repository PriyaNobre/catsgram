const btnLogout = document.querySelector("#logout");
const btnPost = document.querySelector("#btnPost");

function exibirNome() {
  const spanNome = document.querySelector("#nome");

  if (location.pathname === "/") {
    return;
  }
  if (sessionStorage.getItem("nomeUsuario")) {
    spanNome.textContent = sessionStorage.getItem("nomeUsuario");
  }
}

async function cadastrarPost() {
  const inputFile = document.querySelector("#fotoPost");
  const headers = new Headers();
  headers.append("user", sessionStorage.getItem("nomeUsuario"));
  const requisicao = {
    method: "POST",
    headers,
    body: inputFile.files[0]
  };
  await fetch("https://foodgram-back.herokuapp.com/posts", requisicao);

  location.href = "/feed.html";
}
btnPost.addEventListener("click", cadastrarPost);

exibirNome();
