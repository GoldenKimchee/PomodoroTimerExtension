"use strict"

let workMessages = [
    "🤩 Doing great so far!",
    "😄 Keep going, you can do it!",
    "😊 Being productive can feel great.",
    "🤠 Yeehaw! Let's keep it up!",
    "💪 Studying hard? Keep it up.",
    "🧠 Get that brain working.",
    "🍞 Study up and get that bread.",
    "✨ You are doing great.",
    "💰💎💵 <- Your future.",
    "📃 All this work, but you can!",
    "❤️ Thank you for using this timer.",
    "🔥 Keep going.",
    "💯 Aim high. I believe in you.",
    "💻 Focus now, play later.",
];

let breakMessages = [
    "☕️ Here, a cup of coffee.",
    "🌯 Snack break?",
    "🧠 Charging...",
    "🎧 Listen to some music.",
    "✍️ Have some time for yourself.",
    "✌️ A break well-deserved!",
    "👏 Good job!",
    "💅 Self care is important, too.",
    "🚶 Get that circulation going!",
    "👓 Let your eyes rest.",
    "🥾 Taking a walk?",
    "👍 Great work.",
];

const workBtnEl = document.querySelector("#work-btn");
const shortBreakBtnEl = document.querySelector("#short-break-btn");
const longBreakBtnEl = document.querySelector("#long-break-btn");
const timeEl = document.querySelector("#time");
const messageEl = document.querySelector("#message");
const displayEl = document.querySelector("#display");
const totalTimeEl = document.querySelector("#total-time");

const work = 25; 
const shortBreak = 5;
const longBreak = 15;
let currentMinutes, currentSeconds, totalMinutes, totalHours;
currentMinutes = currentSeconds = totalMinutes = totalHours = 0;
let currentTimer, workTimer;
let start = true;


workBtnEl.addEventListener("click", function() {

    displayEl.textContent = "Studying...";
    start = true;
    showMessage(workMessages);
    startTime("25:00", work);

});


shortBreakBtnEl.addEventListener("click", function() {

    clearInterval(workTimer);
    displayEl.textContent = "Taking a short break...";
    showMessage(breakMessages);
    start = true;
    startTime("05:00", shortBreak);

});


longBreakBtnEl.addEventListener("click", function() {

    clearInterval(workTimer);
    displayEl.textContent = "Taking a long break...";
    showMessage(breakMessages);
    start = true;
    startTime("15:00", longBreak);

});


function showMessage(messageArray) {
    let randomIndex = Math.floor( Math.random() * ( messageArray.length - 1 ) );
    messageEl.textContent = messageArray[ randomIndex ];
}


function updateStudyTime() {

    totalMinutes += 1;
    
    if (totalMinutes == 60) {
        totalMinutes = 0;
        totalHours += 1;
    }

    let hourStr, minuteStr;

    if (totalHours > 1) {
        hourStr = "hrs";
    } else hourStr = "hr";

    if (totalMinutes > 1) {
        minuteStr = "mins";
    } else minuteStr = "min";

    totalTimeEl.textContent = totalHours + hourStr + " " + totalMinutes + minuteStr;

}


function startTime(startingTime, time) {
    clearTimeout(currentTimer);

    timeEl.textContent = startingTime;
    currentMinutes = time;

    countDown(currentMinutes, 0);
}


function countDown(minutes, seconds) {

    let tempSeconds = seconds;
    let tempMinutes = minutes;

    if (seconds < 10) {
        tempSeconds = "0" + seconds;
    }
    if (minutes < 10) {
        tempMinutes = "0" + minutes
    }

    timeEl.textContent = tempMinutes + ":" + tempSeconds;

    if (seconds == 0) {
        if (minutes == 0) {
            return;
        }
        minutes -= 1;
        seconds = 59;
        if (start) { // make a more elegant solution later...
            start = false;
        } else updateStudyTime()
    } else seconds--;

    currentTimer = setTimeout(countDown, 1000, minutes, seconds);

}


