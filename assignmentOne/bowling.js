const rolls = [];
// const frameArray = [];
// let frame = [];
const roll = (pins) => {
  rolls.push(pins);
};

const rollsToFrames = (rollsArray) => {
  const frameArray = [];
  let frame = [];
  rollsArray.forEach((value) => {
    if (frame.length === 2 || (frame.length === 1 && frame[0] === 10)) {
      frameArray.push(frame);
      frame = [];
    }
    if (frame.length === 0) {
      frame.push(value);
      if (value === 10 && frameArray.length !== 9) {
        frameArray.push(frame);
        frame = [];
      }
    } else if (frame.length === 1 && frame[0] !== 10) {
      frame.push(value);
      frameArray.push(frame);
      frame = [];
    }
  });
  if (frame.length !== 0) {
    frameArray.push(frame);
  }
  if (frameArray.length > 10) {
    frameArray[9] = frameArray[9].concat(frameArray[10], frameArray[11]);
    frameArray.splice(10, 2);
  }
  return frameArray;
};
const score = () => {
};

module.exports = { rollsToFrames, roll, score };
