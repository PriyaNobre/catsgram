async function exibirPosts() {
  const response = await fetch("https://foodgram-back.herokuapp.com/posts");
  const arrayDeFotos = await response.json();

  var sectionPosts = document.querySelector("section");

  for (var i = 49; i < arrayDeFotos.length; i++) {
    sectionPosts.insertAdjacentHTML(
      "beforeend",

      `<div class="post">
          <div>Por: ${arrayDeFotos[i].user}</div>
          <img src="https://foodgram-back.herokuapp.com/${arrayDeFotos[i].url}" alt="" />
      </div>
    `
    );
  }
}

exibirPosts();
