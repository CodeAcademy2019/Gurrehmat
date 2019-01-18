const shortcuts= require('./shortcuts');

describe('resolvedPromise', ()=> {
    it('should resolve with value "Promise is fulfilled."', ()=> {
        return expect(shortcuts.resolvedPromise).resolves.toEqual('Promise is fulfilled.');
    });
    
});

describe('rejectedPromise', ()=> {
    it('should reject with value "Promise has been REJECTED!"', () => {
        return expect(shortcuts.rejectedPromise).rejects.toEqual('Promise has been REJECTED!');
    });
    it('should catch the reject', () => {
        return shortcuts.rejectedPromise.catch(error => {
            return expect(error).toEqual('Promise has been REJECTED!');
        }); 
    });
});