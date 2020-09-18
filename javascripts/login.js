var btnLogin = document.querySelector("#btnLogin");

function login() {
  const inputNome = document.querySelector("#inputNome");

  if (inputNome.value.length == 0) {
    return alert("Digite um nome primeiro"); // imprime o nome
  }
  sessionStorage.setItem("nomeUsuario", inputNome.value);

  location.href = "/feed.html";
}
btnLogin.addEventListener("click", login);
