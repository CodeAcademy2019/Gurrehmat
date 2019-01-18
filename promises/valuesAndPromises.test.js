const promise = require('./valuesAndPromises')

describe('promise', ()=>{
    it ('should resolve the promise, then return with title', ()=>{
        return expect(promise).resolves.toEqual('DR. MANHATTAN');
    });
});