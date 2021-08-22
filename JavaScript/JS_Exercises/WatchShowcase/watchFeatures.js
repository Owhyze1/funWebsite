const countdown = require('./countdown');
const timer = require('./timer');

const timeButton = document.getElementById("time-button");
const heartRateButton = document.getElementById("heart-rate-button");

const divForTextElement = document.getElementById("watch-text-div");
const textElement = document.getElementById("watch-text");

let clock;

if (timeButton) {
  timeButton.addEventListener('click', function() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    var time = `${hours}:${minutes}:${seconds}`;
    textElement.innerHTML = time;
    console.log('Start time: ' + time);

    clock = setInterval(timer.start(time, textElement), 1000);
  });
}

if (heartRateButton) {
  heartRateButton.addEventListener('click', function() {
    if (clock) clearInterval(clock);


  });
}




// textElement.innerHTML = "hello";
// console.log(textElement.innerHTML);

// divForTextElement.style.alignItems = "flex-end";