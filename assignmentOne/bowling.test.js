const bowling = require('./bowling');

describe('score', () => {
  it('should score the rolls correctly', () => {
    const pinsKnocked = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    pinsKnocked.forEach(pinCount => bowling.roll(pinCount));
    expect(bowling.score()).toEqual(90);
  });
});
