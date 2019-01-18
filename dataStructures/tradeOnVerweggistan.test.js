const tow = require('./tradeOnVerweggistan');

describe('splitString',()=>{
    it('should split string on given splitter', ()=>{
        expect(tow.splitString(`Hey\nHello\nWhy`,`\n`)).toEqual([`Hey`,'Hello','Why']);
    })
})

describe('trade', ()=>{
    it('should return maximum profit for test case ',()=>{
        expect(tow.trade(`1
10 5 13 8 7 11 9 2 10 11 13
2
7 8 1 9 15 3 6 10
4 7 2 14 10
0`)).toEqual("15 29 ");
    });
});