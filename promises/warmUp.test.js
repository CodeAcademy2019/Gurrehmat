const fn = require('./warmUp');

jest.useFakeTimers();

test('waits 300ms before printing ouptut', () => {
    fn();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
  });