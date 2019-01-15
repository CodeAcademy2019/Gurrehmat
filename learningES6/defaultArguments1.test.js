const midp = require("./defaultArguments1")

test("Midpoint of 0.5 should be 0.75",()=>{
    expect(midp(0.5)).toBe(0.75);
});

test("Midpoint of null,0.5 should be 0.25",()=>{
    expect(midp(null,0.5)).toBe(0.25);
});

test("Midpoint of () should be 0.5",()=>{
    expect(midp()).toBe(0.5);
});

test("Midpoint of (0.4,0.8) should be 0.6",()=>{
    expect(parseFloat(midp(0.4,0.8).toFixed(1))).toBe(0.6);
});