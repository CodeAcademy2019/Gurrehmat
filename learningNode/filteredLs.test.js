const main = require('./filteredLS');

describe('filteration', () => {
  it('should filter elements that have specified ending', () => {
    expect(main.filteration(['hello', 'yo', 'hi'], 'o')).toEqual(['hello', 'yo']);
  });
});

describe('lsF', () => {
  it('should print files with given extension', (done) => {
    function callback(filtered) {
      expect(filtered).toEqual(['babySteps.test.js', 'filteredLs.test.js', 'firstAsyncIO.test.js', 'firstIO.test.js', 'helloWorld.test.js']);
      done();
    }
    main.lsF('.', 'test.js', callback);
  });
});
