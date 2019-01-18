const promise = require('./toRejectOrNot')
 
describe('promise', ()=>{
    it('should fulfill with message "I FIRED"', ()=>{
        return expect(promise).resolves.toEqual('I FIRED');
    })
    // it('should not reject promise', ()=>{
    //     return expect(promise).rejects.not.toThrow();
    // })
})