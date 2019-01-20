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

    it('should return maximum profit for test case ',()=>{
        expect(tow.trade(`3
7 3 2 1 3 10 12 2
6 12 13 14 15 2 3
3 1 2 3
0`)).toEqual("62 ");
    });
});