const promiseAfterPromise = require('./promiseAfterPromise');

describe('promise',()=>{
    it ('should return FULFILLED SUCCESSFULLY', ()=>{
        return (expect(promiseAfterPromise.a).resolves.toEqual('Fulfilled Successfully!'));
    });
    it ('should return FULFILLED SUCCESSFULLY! from second function',()=>{
        return (expect(promiseAfterPromise.b).resolves.toEqual('Fulfilled Successfully! from second function'));
    })
})