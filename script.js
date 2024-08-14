let timer;
let elapsedTime = 0;
let isRunning = false;

const h1 = document.querySelector('h1');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('laps');

function updateTime() {
    const time = new Date(elapsedTime);
    const minutes = time.getUTCMinutes().toString().padStart(2, '0');
    const seconds = time.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = Math.floor(time.getUTCMilliseconds() / 10).toString().padStart(2, '0');

    h1.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            elapsedTime += 10;
            updateTime();
        }, 10);
        isRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    elapsedTime = 0;
    updateTime();
    isRunning = false;
    lapsList.innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        const lapTime = document.createElement('li');
        lapTime.textContent = h1.textContent;
        lapsList.appendChild(lapTime);
    }
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);
