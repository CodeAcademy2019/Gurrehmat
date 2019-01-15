const exclaim = require('./defaultArguments2');

test(`Should convert 'Hello' to 'Hello!!!!!`,()=>{
    expect(exclaim('Hello')).toBe('Hello!!!!!');
});

test(`Should return 'Yo!!!!' for ('Yo',4)`,()=>{
    expect(exclaim('Yo',4)).toBe('Yo!!!!');
})

test(`Should return '' for ''`,()=>{
    expect(exclaim('')).toBe('');
})