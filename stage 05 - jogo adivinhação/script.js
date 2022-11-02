const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let xAttempts = 1

//Eventos

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)


//funções ou métodos
//função callback: chama a handleTryClick de novo como argumento do addEvent
function handleTryClick(event) {
  event.preventDefault() //não faça o padrão é o q significa essa linha

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
    screen2.querySelector("h2").innerText= `Você acertou em ${xAttempts} tentativas.`
  }
  inputNumber.value = ""
  xAttempts++  
}

function handleResetClick() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}



