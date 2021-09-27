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
    "🙌 Keep the good work going!",
    "🎓 Turn that thinking cap on!",
    "👨‍💻 Keep on going.",
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
    "🥰 Break time.",
    "🤩 Break time = my favorite time.",
    "👾 Gonna play a quick game?",
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
const sfx = new Audio("sfx.mp3");

let currentMinutes, currentSeconds, totalMinutes, totalHours;
currentMinutes = currentSeconds = totalMinutes = totalHours = 0;
let currentTimer, workTimer;
let started = false;


workBtnEl.addEventListener("click", function() {

    displayEl.textContent = "Studying...";
    showMessage(workMessages);
    startTime("25:00", work);
    countDown(currentMinutes, 0, true, false);

});


shortBreakBtnEl.addEventListener("click", function() {

    clearInterval(workTimer);
    displayEl.textContent = "Taking a short break...";
    showMessage(breakMessages);
    startTime("05:00", shortBreak);
    countDown(currentMinutes, 0, false, false);

});


longBreakBtnEl.addEventListener("click", function() {

    clearInterval(workTimer);
    displayEl.textContent = "Taking a long break...";
    showMessage(breakMessages);
    startTime("15:00", longBreak);
    countDown(currentMinutes, 0, false, false);

});


function showMessage(messageArray) {
    let randomIndex = Math.floor( Math.random() * ( messageArray.length - 1 ) );
    messageEl.textContent = messageArray[ randomIndex ];
}


function startTime(startingTime, time) {

    clearTimeout(currentTimer);

    timeEl.textContent = startingTime;
    currentMinutes = time;

}


function countDown(minutes, seconds, studying, started) {

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
            sfx.play();
            return;
        }
        minutes -= 1;
        seconds = 59;
        if (studying && started) { 
            updateStudyTime();
        } else started = true;
    } else seconds--;

    currentTimer = setTimeout(countDown, 1000, minutes, seconds, studying, started);

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