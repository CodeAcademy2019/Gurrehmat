const thisTest = require('./arrowFnThis')

test('should return Ouch!',()=>{
    expect(thisTest()).toBe("Ouch!");
});