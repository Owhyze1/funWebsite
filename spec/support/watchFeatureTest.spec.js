
// var decrementTime = require('../Home/Javscript/JS_Exercises/WatchShowcase/watchFeatures.js');

describe("Tests for Watch Showcase", function() {
  it("contains tests for the Time Button in the Watch Showcase", function() {
    expect(true).toBe(true);
  });

  it("tests that seconds will decrease from 00 to 59", function() {
    let hours = 14;
    let minutes = 15;
    let seconds = 0;

    let result = decrementTime(hours, minutes, seconds);
    let expected = `${hours}:${minutes}:59`;

    expect(result).toBe(expected);
  });
});