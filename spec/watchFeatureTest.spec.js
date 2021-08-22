const countdown = require('../JavaScript/JS_Exercises/WatchShowcase/countdown');


describe('Tests for Watch Showcase: ', function() {
  it('True should be true', function() {
    expect(true).toBe(true);
  });

  it('False should be false', function() {
    expect(false).toBe(false);
  })

  it('Seconds will decrease from 00 to 59, and minutes will decrease by 1', function() {
    let hours = 14;
    let minutes = 15;
    let seconds = 0;

    let result = countdown.decrementTime(hours, minutes, seconds);
    let expected = `${hours}:${minutes-1}:59`;

    expect(result).toEqual(expected);
  });

  it('Minutes will decrease from 00 to 59, and hours will decrease by 1', function() {
    let hours = 14;
    let minutes = 0;
    let seconds = 0;

    let result = countdown.decrementTime(hours, minutes, seconds);
    let expected = `${hours-1}:59:59`;

    expect(result).toEqual(expected);
  });

  it('Hours will decrease from 00 to 23', function() {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    let result = countdown.decrementTime(hours, minutes, seconds);
    let expected = `23:59:59`;

    expect(result).toEqual(expected);
  });

  it('Single digit seconds should start with zero(0)', function() {
    let hours = 10;
    let minutes = 10;
    let result;
    let expected;

    for (let seconds = 1; seconds <= 10; seconds++) {
      expected = `${hours}:${minutes}:0${seconds-1}`;
      result = countdown.decrementTime(hours, minutes, seconds);

      expect(result).toEqual(expected);
    }
  });

  it('Single digit minutes should start with zero(0)', function() {
    let hours = 14;
    let seconds = 14;
    let result;
    let expected;

    for (let minutes = 0; minutes < 10; minutes++) {
      expected = `${hours}:0${minutes}:${seconds-1}`;
      result = countdown.decrementTime(hours, minutes, seconds);

      expect(result).toEqual(expected);
    }
  });

  it('Single digit hours should start with zero(0)', function() {
    let minutes = 14;
    let seconds = 14;
    let result;
    let expected;

    for (let hours = 0; hours < 10; hours++) {
      expected = `0${hours}:${minutes}:${seconds-1}`;
      result = countdown.decrementTime(hours, minutes, seconds);

      expect(result).toEqual(expected);
    }
  });

  // it('Test for negative seconds', function() { });
});