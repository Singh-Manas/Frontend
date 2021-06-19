const allSeats = document.querySelector('.allSeats');   // Selecting Div Class allSeats to add seats in it.

for(let i = 1; i <= 36; i++) {
    allSeats.innerHTML += '<div class="seats"></div>';  // Adding seats.
}

let bookedSeats = 0;
let remainingSeats = 36;

const booked = document.getElementById('booked');   // Selecting booked span for showing bookedSeats.
const remaining = document.getElementById('remaining'); // Selecting remaining span for showin remainingSeats.

booked.innerText = bookedSeats; // Showing current bookedSeats.
remaining.innerText = remainingSeats;   // Showing current remainingSeats. 

const seats = document.querySelectorAll('.seats');  // Selecting all seats for adding Event Listener.

seats.forEach((seat, index) => {
    seat.addEventListener('click', () => {  // Adding Event Listener to all Seats.
        if(seat.classList.contains('seatsClicked')) {   // If the element is already selected, remove the seatsClicked class to deselect Seat.   
            seat.classList.remove('seatsClicked');  
            bookedSeats--;  // Updating bookedSeats and remainingSeats.
            remainingSeats++;
            booked.innerText = bookedSeats;     
            remaining.innerText = remainingSeats;
        } else {    // If the element is not already selected, select it using the seatsClicked class.
            seat.classList.add('seatsClicked');
            bookedSeats++;  // Updating bookedSeats and remainingSeats.
            remainingSeats--;
            booked.innerText = bookedSeats; 
            remaining.innerText = remainingSeats;
        }
    });
});
