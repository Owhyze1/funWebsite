const countdown = require('./countdown');

let start = function(time, htmlElement) {
   htmlElement.innerHTML = countdown.decrementTime(time);
}

exports.start = start;