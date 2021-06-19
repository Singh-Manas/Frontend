const frame = document.querySelectorAll('.frame');  // Selecting the frame

for(let i = 1; i <= 400; i++) {
    frame[0].innerHTML += '<div class="square"></div>'; // Adding the small pixels i.e. squares inside a frame.
}

const squares = document.querySelectorAll('.square');   // Selecting all squares inside the frame.

const whiteIndexes = [106,107,113,114,126,128,132,134,146,149,151,154,166,170,174,186,194,206,214,226,234,246,254]; // Inserting all indexes for making "M" in an array
whiteIndexes.forEach((item, index) => {
    squares[item].classList.add('newColor');    // Making all indexes for making "M" white by adding newColor class.
});

squares.forEach( (square, index) => {   // For every squares adding a Event Listener
    square.addEventListener('click', () => {
        square.classList.toggle('newColor');    // Toggling the class according to the selection of element.
    });
});