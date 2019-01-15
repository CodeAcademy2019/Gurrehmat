const intro = require('./templateStrings');

test(`Should give introduction with string "Tester"`, ()=>{
    expect(intro("Tester")).toBe(`Hello, Tester!
    Your name lowercased is "tester".`);
});

test(`Should work with string ""`, ()=>{
    expect(intro("")).toBe(`Hello, !
    Your name lowercased is "".`);
});