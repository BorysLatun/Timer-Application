// start button
const startStop = document.querySelector(".start");
let isStarted = false;

startStop.addEventListener("click", () => {
  // button switch start / pause

  if (!isStarted) {
    timerStart();
    isStarted = true;
    startStop.textContent = "pause";
  } else {
    timerStop();
    isStarted = false;
    startStop.textContent = "start";
  }
});

// edit button
const settings = document.querySelector(".settings");
const settingsIcon = document.querySelector(".settings > img");
let editable = false;

settings.addEventListener("click", () => {
  // button switch - edit / done
  if (!editable) {
    editable = true;
    settingsIcon.src = "images/check.svg";
  } else {
    editable = false;
    settingsIcon.src = "images/gear.svg";
  }

  minutesInput.toggleAttribute("disabled");
  secondsInput.toggleAttribute("disabled");
});

// timer logic
// variables also used in edit button
const minutesInput = document.querySelector(".minutes > input");
const secondsInput = document.querySelector(".seconds > input");

function timer() {
  let minutes = +minutesInput.value;
  let seconds = +secondsInput.value;

  --seconds;

  if (seconds < 0) {
    seconds = 59;
    --minutes;
  }

  //leading zero
  seconds < 10
    ? (secondsInput.value = `0${seconds}`)
    : (secondsInput.value = seconds);

  minutes < 10
    ? (minutesInput.value = `0${minutes}`)
    : (minutesInput.value = minutes);

  // timer end
  if (minutes === 0 && seconds === 0) {
    // alert & stop timer
    alert(`That's All Folks!`);
    timerStop();
    // reset values
    secondsInput.value = secondsInput.defaultValue;
    minutesInput.value = minutesInput.defaultValue;
    // reset timer button
    isStarted = false;
    startStop.textContent = "start";
  }
}

let interval;

function timerStart() {
  interval = setInterval(timer, 1000);
}

function timerStop() {
  clearInterval(interval);
}
