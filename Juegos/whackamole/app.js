const square = document.querySelectorAll(".square")
const mole = document.querySelectorAll(".mole")
const timeLeft = document.querySelector("#timeLeft")
let score = document.querySelector("#score")

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove("mole")
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add("mole")

    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener("click", () => {
        if(id.id === hitPosition){
            result = result + 1 
            score.textContent = result
        }
    } )
})

function moveMole() {
    let timeID = null
    timeID = setInterval(randomSquare, 700)
}

moveMole();

function Countdown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timeID)
       Swal.fire({
            icon: 'success',
            title: 'Tu puntaje fue de:',
            text: result + 'puntos',
            })     
    }
}

let timeID = setInterval(Countdown, 1000)

