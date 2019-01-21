const summation = require('./babySteps');

describe('summation', () => {
  it('should add command line arguments', () => {
    process.argv = ['node', 'babySteps.js', 4, 3, 1];
    expect(summation()).toEqual(8);
  })
  it('should concatenate if passed string', () => {
    process.argv = ['node', 'babySteps.js', 'Tom', 1];
    expect(summation()).toEqual('Tom1');
  });
});
