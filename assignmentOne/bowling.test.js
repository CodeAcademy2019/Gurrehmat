const bowling = require('./bowling');

describe('rollsToFrames', () => {
  it('should convert rolls array to a frames array', () => {
    expect(bowling.rollsToFrames([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]))
      .toEqual([[3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6]]);
  });
  it('should handle spares', () => {
    expect(bowling.rollsToFrames([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
      .toEqual([[6, 4], [3, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
  });
  it('should handle strikes', () => {
    expect(bowling.rollsToFrames([10, 5, 5, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
      .toEqual([[10], [5, 5], [9, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
  });
  it('should handle fill ball', () => {
    expect(bowling.rollsToFrames([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]))
      .toEqual([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [10, 10, 10]]);
  });
});

describe('score', () => {
  xit('should score the rolls correctly', () => {
    const pinsKnocked = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    pinsKnocked.forEach(pinCount => bowling.roll(pinCount));
    expect(bowling.score()).toEqual(90);
  });
});
