const summation = () => {
  const values = process.argv.slice(2).map(x => Number(x));
  const result = values.reduce((accumulator, value) => accumulator + value, 0);
  console.log(result);
  return result;
};

summation();

module.exports = summation;
