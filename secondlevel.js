document.addEventListener('DOMContentLoaded', () => {
  //list all card options
  const cardArray = [
    {
      name: 'eli1',
      img: 'images/eli1.png'
    },
    {
      name: 'eli2',
      img: 'images/eli2.png'
    },
    {
      name: 'eli3',
      img: 'images/eli3.png'
    },
    {
      name: 'eli4',
      img: 'images/eli4.png'
    },
    {
      name: 'eli5',
      img: 'images/eli5.png'
    },
    {
      name: 'eli6',
      img: 'images/eli6.png'
    },
    {
      name: 'eli1',
      img: 'images/eli1.png'
    },
    {
      name: 'eli2',
      img: 'images/eli2.png'
    },
    {
      name: 'eli3',
      img: 'images/eli3.png'
    },
    {
      name: 'eli4',
      img: 'images/eli4.png'
    },
    {
      name: 'eli5',
      img: 'images/eli5.png'
    },
    {
      name: 'eli6',
      img: 'images/eli6.png'
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }
//next level screen
function showLetsGoScreen() {
  const letsGoScreen = document.getElementById('letsGoScreen');
  letsGoScreen.style.display = 'block';
}

// Adjust the time (in milliseconds) to control how long the screen is displayed

function goToNextLevel() {
  // You can customize the URL for the next level/page
  window.location.href = 'final.html'; // Change 'next_level.html' to your desired URL
}







  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      showLetsGoScreen();
      setTimeout(goToNextLevel,1500);
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})

