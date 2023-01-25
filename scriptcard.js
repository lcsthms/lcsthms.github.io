
const game = document.getElementById('game');
const cards = document.querySelectorAll('.card');

// var sign1 = document.getElementById('mercedes');
// var sign2 = document.getElementById('abc');
// var sign3 = document.getElementById('yedo');
// var sign4 = document.getElementById('genito');
// var sign5 = document.getElementById('hibiscus');
// var sign6 = document.getElementById('sac');




let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;


//test
window.addEventListener('load', ()=>
flipAllCard()
)

//test qui flip all cards quand la page se charge
function flipAllCard(){
  cards.forEach(card => card.classList.add('flip'))
}

function flipCard() {
  //console.log(cards)
  if (lockBoard) return;
  if (this === firstCard) return;

  //this.classList.add('flip');
  this.classList.remove('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.cardValue === secondCard.dataset.cardValue;
  let cardValue = firstCard.dataset.cardValue;

  if(isMatch){
    setTimeout(()=> {
      document.getElementById('sign'+cardValue).style.display="flex";
      disableCards();
    }, 700);
  }
  else{
    unflipCards();
  }
}



function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.add('flip');
    secondCard.classList.add('flip');

    resetBoard();
  }, 700);
}


function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
