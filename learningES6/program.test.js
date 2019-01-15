const program = require('./program');

test('should print HELLO ES6', ()=>{
    expect(program()).toBe('HELLO ES6');
  });

  test('should not print hello es6', ()=>{
    expect(program()).not.toBe('hello es6');
  });