const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateElement = document.getElementById('date-picker');

const countdownElement = document.getElementById('countdown');
const countdownTitleElement = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = countdownElement.querySelectorAll('ul li span');

const completeElement = document.getElementById('complete');
const completeInfoElement = document.getElementById('complete-info');
const completeBtn = document.getElementById('complete-button');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;
let savedCountdown;

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
    const distance = countdownValue - now;

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    // Hide Input 
    inputContainer.hidden = true;

    // If the countdown has ended, show complete
    if (distance < 0) {
        countdownElement.hidden = true;
        clearInterval(countdownActive);
        completeInfoElement.textContent = `${countdownTitle} finished on ${countdownDate}`;
        completeElement.hidden = false;
        return;
    }

    // Populate Countdown
    countdownTitleElement.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    // show Countdown
    countdownElement.hidden = false;
    }, second)
}

// Take values from form Input
function updateCountdown(event) {
    event.preventDefault();
    countdownTitle = this[0].value;
    countdownDate = this[1].value;
    this[0].value = '';
    this[1].value = '';

    savedCountdown = {
        title: countdownTitle,
        date: countdownDate,
    };
    // we can't store JS objects into localStorage, it needs to be stored in form of string (JSON String):
    localStorage.setItem('countdown', JSON.stringify(savedCountdown));
    
    // Validation Check: Title, Date
    if (countdownTitle === '' || countdownDate === '') {
        alert('Please select a proper Title & Date for the Countdown!')
    } else {
        // Get number version of current Date, updateDOM
        countdownValue = new Date(countdownDate).getTime();
        updateDOM();
    }
}

// Reset All Values
function reset() {
    // Hide Countdown, Show Input
    countdownElement.hidden = true;
    completeElement.hidden = true;
    inputContainer.hidden = false;
    // Stop the countdown
    clearInterval(countdownActive);
    // Reset Values
    countdownTitle = '';
    countdownDate = '';
    localStorage.removeItem('countdown');
}

// Restore Previous Countdown session
function restorePreviousCountdown() {
    // Get countdown data from localStorage if available
    if (localStorage.getItem('countdown')) {
        inputContainer.hidden = true;
        savedCountdown = JSON.parse(localStorage.getItem('countdown'));
        countdownTitle = savedCountdown.title;
        countdownDate = savedCountdown.date;
        countdownValue = new Date(countdownDate).getTime();
        updateDOM();
    }
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click', reset);
completeBtn.addEventListener('click', reset);

// On Load
restorePreviousCountdown();