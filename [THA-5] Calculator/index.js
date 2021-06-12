// For writing functionalities in JS, first all the buttons are retreived from the web page.
// The order of buttons is according to how the buttons are defined in the document.
// Then each button is mapped to a specific variable.
// Then a event listener is added to each variable.
// The operators are fetched and then operation is performed.
// Finally the result is showed.
// We don't fetch the operators outside the Event Listener because we want to dynamically fetch the operators when the operation button is clicked.

const buttons = document.querySelectorAll('button');    // Selecting all buttons

const addButton = buttons[0];   // Mapping buttons to variables.
const subtractButton = buttons[1];
const multiplyButton = buttons[2];
const divideButton = buttons[3];

const result = document.getElementById('result');   // Mapping result element to result variable 

// Now adding event listeners to all button variables.
addButton.addEventListener('click', () => {
    const first_input = parseInt(document.getElementById('first').value);   // Parsing to an Integer because by default the type is string.
    const second_input = parseInt(document.getElementById('second').value);
    const res = first_input + second_input;
    result.value = res;
    event.preventDefault(); // It is used to prevent default behaviour of element i.e. to submit values.
});

subtractButton.addEventListener('click', () => {
    const first_input = parseInt(document.getElementById('first').value);
    const second_input = parseInt(document.getElementById('second').value);
    const res = first_input - second_input;
    result.value = res;
    event.preventDefault();
});

multiplyButton.addEventListener('click', () => {
    const first_input = parseInt(document.getElementById('first').value);
    const second_input = parseInt(document.getElementById('second').value);
    const res = first_input * second_input;
    result.value = res;
    event.preventDefault();
});

divideButton.addEventListener('click', () => {
    const first_input = parseInt(document.getElementById('first').value);
    const second_input = parseInt(document.getElementById('second').value);
    const res = first_input / second_input;
    result.value = res;
    event.preventDefault();
});

