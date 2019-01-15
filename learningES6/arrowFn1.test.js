const fn = require ('./arrowFn1')

test(`should extract first chars from ['Good','old','Games']`,()=>{
    expect(fn('Good','old','Games')).toBe(`[Good,old,Games] becomes "GoG"`);
});

test(`should extract first chars from ['Hey','some','body']`,()=>{
    expect(fn('Hey','some','body')).toBe(`[Hey,some,body] becomes "Hsb"`);
});

test(`should deal with empty array`,()=>{
    expect(fn()).toBe(`[] becomes ""`);
});