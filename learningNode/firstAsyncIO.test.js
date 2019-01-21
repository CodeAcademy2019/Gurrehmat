const asyncio = require('./firstAsyncIO');

// process.argv = ['node', 'firstAsyncIO.js', 'testFilesEx3/three.txt'];
describe('newLineCounter', () => {
  it('should return 3 for file three.txt', (done) => {
    const callbackTest = (value) => {
      expect(value).toEqual(3);
      done();
    };
    asyncio.newLineCounter(callbackTest);
  });
});
