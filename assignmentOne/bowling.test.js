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
  it('should handle 3x strike fill ball', () => {
    expect(bowling.rollsToFrames(
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
    ))
      .toEqual(
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [10, 10, 10]],
      );
  });
  it('should handle strike + spare fill ball', () => {
    expect(bowling.rollsToFrames([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 10]))
      .toEqual(
        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [9, 1, 10]],
      );
  });
});

describe('score', () => {
  it('should score the rolls without spare and strike correctly', () => {
    const pinsKnocked = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    pinsKnocked.forEach(pinCount => bowling.roll(pinCount));
    expect(bowling.score()).toEqual(90);
  });
  it('should score the rolls with spare correctly', () => {
    const pinsKnocked = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    pinsKnocked.forEach(pinCount => bowling.roll(pinCount));
    expect(bowling.score()).toEqual(16);
  });
  it('should score the rolls with strike correctly', () => {
    const pinsKnocked = [10, 5, 5, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    pinsKnocked.forEach(pinCount => bowling.roll(pinCount));
    expect(bowling.score()).toEqual(48);
  });
  it('should score the rolls with strike + spare fill ball correctly', () => {
    const pinsKnocked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 10];
    pinsKnocked.forEach(pinCount => bowling.roll(pinCount));
    expect(bowling.score()).toEqual(20);
  });
  it('should score the rolls with 3x strike fill ball correctly', () => {
    const pinsKnocked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
    pinsKnocked.forEach(pinCount => bowling.roll(pinCount));
    expect(bowling.score()).toEqual(30);
  });
});
