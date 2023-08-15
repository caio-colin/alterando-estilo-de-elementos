const button = document.getElementById("button")
const block1 = document.getElementById("block1")

button.addEventListener("click", function () {
  if (block1.style.backgroundColor == "yellow") {
    block1.style.backgroundColor = "blue"
    button.innerHTML = "Trocar de Cor"
  } else {
    block1.style.backgroundColor = "yellow"
    button.innerHTML = "Voltar a cor original"
  }
})
