// Single-digit values must start with a zero
function lessThanTen(time) {
  return (time >= 0 && time < 10) ? "0" + time : time;
}

// when time reaches max, reset to zero (i.e. after 59 seconds, reset to zero)
function resetAtMax(time, timeMax) {
  return (time === timeMax) ? 0 : time;
}

// timer
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

// countdown timer
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

// function decrementTime(hours, minutes, seconds) {
//   /*
//     Account for
//     - time less than 10
//     - negative time
//     - going from 00 to 59 for seconds AND minutes
//     - going from 00 to 23 for hours i.e. decrementing from midnight
//   */

//   // console.log(`Starting time = ${hours}:${minutes}:${seconds}`);

//   if (hours < 0 || minutes < 0 || seconds < 0)
//     return;

//   var lessThanTen = (time) => {
//     return (time >= 0 && time < 10) ? "0" + time : time;
//   }

//   var decreasingTimeFromZero = (time, timeMax) => {
//     return (time === -1) ? timeMax : time;
//   }

//   seconds = decreasingTimeFromZero(--seconds, 59);
//   if (seconds === 59)
//     minutes = decreasingTimeFromZero(--minutes, 59);
//   if (minutes === 59)
//     hours = decreasingTimeFromZero(--hours, 23);

//   hours = lessThanTen(hours);
//   minutes = lessThanTen(minutes);
//   seconds = lessThanTen(seconds);

//   return `${hours}:${minutes}:${seconds}`;
// }

exports.decrementTime = decrementTime;
exports.incrementTime = incrementTime;