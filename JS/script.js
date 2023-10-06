//recieving items
const displaytime = document.querySelector('#timeDisplay');
const startBtn = document.querySelector('#startButton');
const stopBtn = document.querySelector('#stopButton');
const resetBtn = document.querySelector('#resetButton');

let startTime = 0;
let elapsedTime =0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

// addEvenetlistener to each buttons

startBtn.addEventListener('click', () => {
    if(paused) {
        paused = false;
        startTime = Date.now() - elapsedTime; //elapsed means spent time
        // setInterval(function, time)
        intervalId = setInterval(updateTime, 75);
    }
})

function updateTime() {
    // how much time is passed
    // Date.now() shows time at this moment
    elapsedTime = Date.now() - startTime;
    
    // should change the format
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    // show the hrs:mins:secs
    displaytime.textContent = `${hrs}:${mins}:${secs}`

    // how to show as 00:00:00
    function pad(unit) {
        return(('0') + unit).length > 2 ? unit : '0' + unit;
    }
}

stopBtn.addEventListener('click', () =>{
    if(!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
})

resetBtn.addEventListener('click', () =>{
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime =0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    displaytime.textContent = `${'00:00:00'}`
})



