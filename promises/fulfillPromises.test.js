const program = require('./fulfillPromises')
describe('promise', ()=> {    
    
    it('should be fulfilled with value "FULFILLED!"',async () =>{
        await expect(program.promise).resolves.toEqual('FULFILLED!');
    });
    it('should not return some other fulfill message',async () =>{
        await expect(program.promise).resolves.not.toEqual('NOT FULFILLED!');
    });

    // it('should run then function', async () =>{
    //     await expect(program.promise.then).toHaveBeenCalled();
    // })

})