const timeButton = document.getElementById("time-button");
const heartRateButton = document.getElementById("heart-rate-button");

const divForTextElement = document.getElementById("watch-text-div");
const textElement = document.getElementById("watch-text");
const heartImage = document.getElementById("heart");

let clock;

if (timeButton) {
  timeButton.addEventListener('click', function() {
    // move heart image and text div to correct position
    clearInterval(clock);
    // reset position of heart and watch text, if needed
    heartImage.style.zIndex = 0;
    heartImage.alt = 'watch screen';
    divForTextElement.style.alignItems = 'center';
    divForTextElement.paddingLeft = '0px';


    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    var time = `${hours}:${minutes}:${seconds}`;
    textElement.innerHTML = time;

    let start = function(htmlElement) {
      let output = htmlElement.innerHTML;
      output = output.split(':');
      let h = Number(output[0]);
      let m = Number(output[1]);
      let s = Number(output[2]);
      htmlElement.innerHTML = incrementTime(h, m, s);
    }
    clock = setInterval(function() { start(textElement) },1000);
  });
}

if (heartRateButton) {

  function heartAnimation(heart) {
    let keyframes = [{ width: '110px'},
                     {width: '125px'},
                     { width: '110px'}
                    ];
    heart.animate(keyframes, {duration: 1250, iterations: Infinity});
  }

  heartRateButton.addEventListener('click', function() {
    clearInterval(clock);

    heartImage.style.zIndex = 3;
    heartImage.alt = 'Pulsing Heart';
    heartImage.title = 'Pulsing Heart';
    heartAnimation(heartImage);

    // move text element to bottom of watch screen
    divForTextElement.style.alignItems = 'flex-end';
    divForTextElement.style.paddingLeft = '5px';
    textElement.innerHTML = '78';
    textElement.alt = 'Heart Rate';
    textElement.title = 'Heart Rate';
  });
}

function lessThanTen(time) {
  return (time >= 0 && time < 10) ? "0" + time : time;
}

function resetAtMax(time, timeMax) {
  return (time === timeMax) ? 0 : time;
}

function incrementTime(hours, minutes, seconds) {

  seconds = resetAtMax(++seconds, 60);
  if (seconds === 0)
    minutes = resetAtMax(++minutes, 60);
  if (minutes === 0)
    hours = resetAtMax(++hours, 24);

  seconds = lessThanTen(seconds);
  minutes = lessThanTen(minutes);
  hours = lessThanTen(hours);

  return `${hours}:${minutes}:${seconds}`;
}

function decrementTime(hours, minutes, seconds) {
  if (hours < 0 || minutes < 0 || seconds < 0)
    return;

  let decreasingTimeFromZero = (time, timeMax) => {
    return (time === -1) ? timeMax : time;
  }
  seconds = decreasingTimeFromZero(--seconds, 59);
  if (seconds === 59)
    minutes = decreasingTimeFromZero(--minutes, 59);
  if (minutes === 59)
    hours = decreasingTimeFromZero(--hours, 23);

  hours = lessThanTen(hours);
  minutes = lessThanTen(minutes);
  seconds = lessThanTen(seconds);

  return `${hours}:${minutes}:${seconds}`;
}