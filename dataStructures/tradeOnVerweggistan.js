let sum;
const splitString = (inputString, splitter) => inputString.split(splitter);
const cumulation = (x) => {
  sum += x;
  return sum;
};
const trade = (inputString) => {
  let retString = '';
  const lines = inputString.split('\n').map(line => line.split(' ').map(value => parseInt(value, 10)));

  let i = 0;
  do {
    const stacks = [];
    let individualProfits = [];
    const cumulativeProfits = [];
    const maxProfits = [];
    const maxProfitIndices = [];
    // const possiblePurchases = [];
    if (lines[i].length === 1) {
      for (let j = 0; j < lines[i][0]; j += 1) {
        stacks.push(lines[i + j + 1].slice(1));
      }
    }
    individualProfits = stacks.map(stack => stack.map(x => 10 - x));
    for (let j = 0; j < individualProfits.length; j += 1) {
      sum = 0;
      cumulativeProfits.push(individualProfits[j].map(cumulation));
      maxProfits[j] = Math.max(...cumulativeProfits[j]);
    }
    for (let j = 0; j < cumulativeProfits.length; j += 1) {
      const temp = [];
      for (let k = 0; k < cumulativeProfits[j].length; k += 1) {
        if (cumulativeProfits[j][k] === maxProfits[j]) {
          temp.push(k);
        }
      }
      maxProfitIndices.push(temp);
    }
    const totalMax = maxProfits.reduce((accumulator, value) => accumulator + value, 0);

    i += lines[i][0] + 1;
    console.log(totalMax);
    retString = `${retString + totalMax} `;
  } while (lines[i][0]);

  return retString;
};


module.exports = { trade, splitString };
