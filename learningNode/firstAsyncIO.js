const fs = require('fs');

const filePath = 'testFilesEx3/three.txt';

const callback = (length) => {
  console.log(length);
};

const newLineCounter = (callback) => {
  fs.readFile(filePath, 'utf-8', (error, fileContents) => {
    if (error) {
      console.log(error.message);
      return error;
    }
    const lines = fileContents.split('\n');
    console.log(lines);
    const result = lines.length - 1;
    callback(result);
    return result;
  });
};
newLineCounter(callback);
module.exports = { newLineCounter, callback };
