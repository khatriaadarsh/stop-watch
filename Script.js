var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var startBtn = document.getElementById("start-btn");
var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var interval;

var singleClick;

function timer() {
    msec++;
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }
    if (sec >= 60) {
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
    if (min >= 60) {
        hour++;
        hourHeading.innerHTML = hour;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10)
    startBtn.disabled = true;
}

function stop() {
    clearInterval(interval);
    startBtn.disabled = false;
}

function reset() {
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hourHeading.innerHTML = hour
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    startBtn.disabled = false;
}