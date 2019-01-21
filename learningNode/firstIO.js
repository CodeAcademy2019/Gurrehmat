const fs = require('fs');

const newLineCounter = () => {
  const fileContents = fs.readFileSync(process.argv[2]).toString();
  const lines = fileContents.split('\n');
  const result = lines.length - 1;
  console.log(result);
  return result;
};

newLineCounter();
 module.exports = newLineCounter;
 