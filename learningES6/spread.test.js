const spread = require('./spread')

test("should return 5 for (18,5,7,24)",()=>{
    expect(spread(18,5,7,24)).toBe("The minimum of [18,5,7,24] is 5");
});

test("should return Nan for (18,5,7,24,'hi')",()=>{
    expect(spread(18,5,7,24,'hi')).toBe("The minimum of [18,5,7,24,hi] is NaN");
});