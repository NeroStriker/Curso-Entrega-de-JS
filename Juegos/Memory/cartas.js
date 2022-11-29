document.addEventListener("DOMContentLoaded", () => {

    // Cartas
    const cardArray = [       
        {
            name: "cat",
            img: "cartas/cat.png"
        },
        {
            name: "cat",
            img: "cartas/cat.png"
        },
        {
            name: "crow",
            img: "cartas/crow.png"
        },
        {
            name: "crow",
            img: "cartas/crow.png"
        },
        {
            name: "dog",
            img: "cartas/dog.png"
        },
        {
            name: "dog",
            img: "cartas/dog.png"
        },
        {
            name: "duck",
            img: "cartas/duck.png"
        },
        {
            name: "duck",
            img: "cartas/duck.png"
        },
        {
            name: "fish",
            img: "cartas/fish.png"
        },
        {
            name: "fish",
            img: "cartas/fish.png"
        },
        {
            name: "hamster",
            img: "cartas/hamster.png"
        },
        {
            name: "hamster",
            img: "cartas/hamster.png"
        },        
    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    var cardsChosen = []
    var cardsChosenID = []
    var cardsWon = []

    //creating the board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement("img")
            card.setAttribute("src", "cartas/ReversoCarta.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flipcard )
           grid.appendChild(card)
        }
    }

    createBoard()

    // check for match
    function checkForMatch() {
        var card = document.querySelectorAll("img")
        const optionOneID = cardsChosenID[0]
        const optionTwoID = cardsChosenID[1]
        if (cardsChosen[0] === cardsChosen[1]) {            
            card[optionOneID].setAttribute("src", "cartas/CartaVacia.png")
            card[optionTwoID].setAttribute("src", "cartas/CartaVacia.png")
            cardsWon.push(cardsChosen)
        } else {
            card[optionOneID].setAttribute("src", "cartas/ReversoCarta.png")
            card[optionTwoID].setAttribute("src", "cartas/ReversoCarta.png")            
        }
        cardsChosen = []
        cardsChosenID = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = "Ganaste!"            
            Swal.fire({
            icon: 'success',
            title: 'Ganaste!',
            text: 'Puedes probar los otros juegos',
            })
        }
    }


    //flip the cards

    function flipcard() {
        var cardID = this.getAttribute("data-id")
        cardsChosen.push(cardArray[cardID].name)
        cardsChosenID.push(cardID)
        this.setAttribute("src", cardArray[cardID].img)
        cardsChosen.length === 2 && setTimeout(checkForMatch, 350)
    }



})