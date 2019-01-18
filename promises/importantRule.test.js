const importantRule = require('./importantRule');

describe('catch', ()=>{
    it('should catch error', ()=>{
        return importantRule.promiseChain.catch('rejectedPromise',()=>{
            return expect(rejectedPromise).toEqual('OH NOES');
        });
    });
});

describe('outputArray', ()=>{
    it('should have console log output stored',()=>{
        return expect(importantRule.outputArray).toEqual([1,2,3,4,5,'OH NOES']);
    });
});

describe('alwaysThrows', ()=>{
    it('should throw error',()=>{
        return expect(importantRule.alwaysThrows).toThrowError('OH NOES');
    });
});

describe('iterate', ()=>{
    it ('should increment value passed', () =>{
        return expect(importantRule.iterate(1)).toEqual(2);
    });
});