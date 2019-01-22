let rolls = [];
// let frames = [];

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
  const frames = rollsToFrames(rolls);
  if (frames.length < 10) {
    return new Error('Game is incomplete');
  }
  let tally = 0;
  frames.forEach((frame, index) => {
    let frameTotal = frame.reduce((total, current) => total + current, 0);
    if (index !== 9) {
      if (frameTotal < 10) {
        tally += frameTotal;
      } else if (frameTotal === 10 && frame.length === 2) {
        frameTotal += frames[index + 1][0];
        tally += frameTotal;
      } else if (frameTotal === 10 && frame.length === 1) {
        // frameTotal += (frames[index + 1][0] + frames[index + 1][1]);
        if (frames[index + 1].length === 1) {
          frameTotal += frames[index + 1][0] + frames[index + 2][0];
        } else {
          frameTotal += frames[index + 1][0] + frames[index + 1][1];
        }
        tally += frameTotal;
      }
    } else if (index === 9) {
      tally += frameTotal;
    }
  });
  rolls = [];
  return tally;
};

module.exports = { rollsToFrames, roll, score };
