const program = require('./program');

test('print HELLO ES6', ()=>{
    expect(program()).toBe('HELLO ES6');
  });