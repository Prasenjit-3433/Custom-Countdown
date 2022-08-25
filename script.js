const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateElement = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);

// Take values from form Input
function updateCountdown(event) {
    event.preventDefault();
    countdownTitle = this[0].value;
    countdownDate = this[1].value;
    console.log(countdownTitle, countdownDate);
}


// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);