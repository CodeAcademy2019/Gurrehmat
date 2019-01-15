const rest = require("./rest")

test("Average of 15,12,8,4,-1 should be 7.6",()=>{
    expect(rest(15,12,8,4,-1)).toBe(7.6);
});

test("should work for 1 value",()=>{
    expect(rest(4)).toBe(4);
});

test("should work for empty array",()=>{
    expect(rest()).toBe(NaN);
});