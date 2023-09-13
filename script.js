let randomNum = getRandomNumber();
let currentMessage = 'Guess first !!';
let count = 1;

const inputs = document.querySelector('.inputs');
const guessInput = document.querySelector('.guessInput');
const guessCheckBtn = document.querySelector('.guessCheckBtn');
const playAgainBtn = document.querySelector('.playAgainBtn');
const message = document.querySelector('.message');

guessCheckBtn.addEventListener('click', () => {
    const guessNumber = parseInt(guessInput.value);

    if (guessNumber === randomNum) {
        currentMessage = 'You Won!!';
        updateMessage;
        playAgain();
    }

    else if (guessNumber >= randomNum) {
        currentMessage = 'Input Number is greater than the Correct Number';
    }

    else if (guessNumber <= randomNum) {
        currentMessage = 'Input Number is less than the Correct Number';
    }

    else {
        currentMessage = 'Enter a valid number';
    }

    updateMessage();

    if (count >= 3 && guessNumber != randomNum) {
        currentMessage = 'You lost !!';
        updateMessage();
        playAgain();
    }
    count++;

});

playAgainBtn.addEventListener('click', () => {
    randomNum = getRandomNumber();
    count = 1;
    currentMessage = 'Guess first !!';
    updateMessage();
    playAgainBtn.style.display = 'none';
    inputs.style.display = 'flex';
    guessInput.value = '';
});

function getRandomNumber() {
    return (Math.floor(Math.random() * 10) + 1);
}

function updateMessage() {
    message.innerHTML = currentMessage;
}

function playAgain() {
    inputs.style.display = 'none';
    playAgainBtn.style.display = 'block';
}

