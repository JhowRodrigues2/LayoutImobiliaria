var altura = document.querySelector(".quest");
var butao = document.querySelector(".butao");
var pr = document.querySelector(`.pr`);
butao.addEventListener("click", function () {
  if (altura.style.height == "14vh") {
    altura.style.height = "25vh";
    addP();
  } else {
    altura.style.height = "14vh";
    removeP();
  }
});
function addP() {
  const p = document.createElement("p");
  p.innerHTML = `<br>ADICIONE TEXTO AQUI, ADICIONE TEXTO AQUI, ADICIONE TEXTO AQUI, ADICIONE TEXTO AQUI,ADICIONE TEXTO AQUI, ADICIONE TEXTO AQUI, ADICIONE TEXTO AQUI, ADICIONE TEXTO AQUI`;
  pr.appendChild(p);
}

function removeP() {
  pr.innerHTML = ``;
}
