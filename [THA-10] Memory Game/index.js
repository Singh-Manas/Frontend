// Selecting All Cards
const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;     // Variable for checking if a card is flipped or not
let lockBoard;      // Variable for locking board so that when 2 cards are flipped, third card cannot be flipped before those two cards move into original state.
let firstCard, secondCard;  // Variables for storing which card has been selected as firstCard and secondCard.
// Function for flipping card
function flipCard() {
    if(lockBoard)   return;     // If board has been already locked then you cant change board state.

    if(this === firstCard)  return; // If the user has clicked on the same card as the first one then also do nothing.

    this.classList.add('flip'); // Otherwise Flip the Card.

    if(!hasFlippedCard) {
        // If first card has not been selected.
        hasFlippedCard = true;
        firstCard = this;
        return;
    } 
        // If second card has been selected.
        hasFlippedCard = false;
        secondCard = this;
        // Now both cards are selected, then check if both cards are same or not.
        checkForMatch();
}
// Function for checking if both cards are same or not.
function checkForMatch() {
    // Checking if cards match or not on the basis of data-* attribute.
    if(firstCard.dataset.frame === secondCard.dataset.frame) {
        disableCards();     // If they are same then disable the cards.
    } else {
    // If they are not same, then unflip the cards to original state.
        unflipCards();
    }
}
// Function for disable cards i.e. cards will not flip to original state.
function disableCards() {
    firstCard.removeEventListener('click',  flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();   // Board needs to be reset to allow for the next set of cards.
}
// Function for unflipping the cards to original state.
function unflipCards() {
    lockBoard = true;   // Setting lockBoard to true so that until the cards are reset, another card cannot flip.
    setTimeout(() => {  // Using setTimeout so that second card transition is visible before it is returned to original state.
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();   // When the cards are unflipped, the board needs to be resetted.
    }, 1500);
}
// Function for resetting board to original state.
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]; 
    [firstCard, secondCard] = [null, null];
}
// Function for shuffling cards in random order.
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);     // Giving each card a random number between 0 and 12
        card.style.order = randomPos;   // Changing the order of original card.
    })
})();
// Adding Event Listener to each card.
cards.forEach(card => card.addEventListener('click', flipCard));