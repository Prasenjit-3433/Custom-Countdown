const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateElement = document.getElementById('date-picker');

const countdownElement = document.getElementById('countdown');
const countdownTitleElement = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = countdownElement.querySelectorAll('ul li span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;

// Calculate day, hour, minute, second etc. in milliseconds as getTime() returns in milliseconds:
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;


// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);

// Populate Countdown / Complete UI
function updateDOM() {
    countdownActive = setInterval(() => {
        const now = new Date().getTime();
    const distance = countdownValue -now;
    console.log('distance: ', distance);

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);

    // Populate Countdown
    countdownTitleElement.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    // Hide Input 
    inputContainer.hidden = true;
    // show Countdown
    countdownElement.hidden = false;
    }, second)
}

// Take values from form Input
function updateCountdown(event) {
    event.preventDefault();
    countdownTitle = this[0].value;
    countdownDate = this[1].value;
    console.log(countdownTitle, countdownDate);
    // Get number version of current Date, updateDOM
    countdownValue = new Date(countdownDate).getTime();
    console.log('countdownValue', countdownValue);
    updateDOM();
}


// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);