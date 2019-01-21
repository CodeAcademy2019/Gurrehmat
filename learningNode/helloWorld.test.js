const helloFunction = require('./helloWorld');

describe('helloFunction', () => {
  it('should return \'HELLO WORLD\'', () => {
    expect(helloFunction()).toEqual('HELLO WORLD');
  });

  it('should not return some other string', () => {
    expect(helloFunction()).not.toEqual('Hey');
  });
});
