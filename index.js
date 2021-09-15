"use strict"

let displayEl = document.querySelector("#display");
let leftBtnEl = document.querySelector("#left-btn");
let rightBtnEl = document.querySelector("#right-btn");
let timeEl = document.querySelector("#time");

let studyTime, breakTime;

leftBtnEl.addEventListener("click", function() {
    if (leftBtnEl.classList.contains("ok")) {
        // add code
    }
    if (leftBtnEl.classList.contains("reset")) {
        // add code
    }
});

rightBtnEl.addEventListener("click", function() {
    if (rightBtnEl.classList.contains("clear")) {
        timeEl.value = null;
    }
    if (rightBtnEl.classList.contains("stop")) {
        // add code
    }
});