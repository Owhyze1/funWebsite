const countdown = require('./countdown');

const timeButton = document.getElementById("time-button");
const heartRateButton = document.getElementById("heart-rate-button");

const divForTextElement = document.getElementById("watch-text-div");
const textElement = document.getElementById("watch-text");


if (timeButton) {
  timeButton.addEventListener("click", function() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    var time = `${hours}:${minutes}:${seconds}`;
    textElement.innerHTML = time;

    var decreased = decrementTime(13, 00, 12);
    console.log(decreased);


    var decreased = countdown.decrementTime(00, 15, 12);
    console.log(decreased);
  });
}




// textElement.innerHTML = "hello";
// console.log(textElement.innerHTML);

// divForTextElement.style.alignItems = "flex-end";