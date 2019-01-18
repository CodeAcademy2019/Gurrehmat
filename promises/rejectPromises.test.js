const promise = require('./rejectPromises')
describe('promise', ()=> {    
    
    it('should reject with error message "REJECTED!"',async () =>{
        await expect(promise).rejects.toThrow('REJECTED!');
    });
    it('should not return some other fulfill message',async () =>{
        await expect(promise).rejects.not.toThrow('NOT REJECTED!');
    });
})
