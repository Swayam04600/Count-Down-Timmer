// script.js
let countdown;
let timeLeft;
const timerDisplay = document.getElementById('timerDisplay');
const inputTime = document.getElementById('inputTime');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Add audio for button clicks
const buttonSound = new Audio('button-click.mp3'); // Add your audio file path here

function playButtonSound() {
    buttonSound.currentTime = 0; // Reset audio playback to the beginning
    buttonSound.play();
}

function startTimer() {
    if (timeLeft > 0) {
        playButtonSound(); // Play sound effect
        // Start the countdown
        countdown = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    playButtonSound(); // Play sound effect
    // Clear the countdown
    clearInterval(countdown);
}

function resetTimer() {
    playButtonSound(); // Play sound effect
    // Clear the countdown and reset the timer
    clearInterval(countdown);
    timeLeft = 0;
    updateDisplay();
}

function setTimer() {
    const inputSeconds = parseInt(inputTime.value);
    if (!isNaN(inputSeconds) && inputSeconds >= 0) {
        // Set the timer with the input seconds
        timeLeft = inputSeconds;
        updateDisplay();
    }
}

function updateTimer() {
    if (timeLeft > 0) {
        // Decrease time left and update display
        timeLeft--;
        updateDisplay();
    } else {
        // Time has run out, clear the countdown
        clearInterval(countdown);
    }
}

function updateDisplay() {
    // Convert time left to minutes and seconds format and display it
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Initial update of the timer display
updateDisplay();
