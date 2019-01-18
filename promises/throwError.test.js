let parsedPromise = require('./throwError');

describe ('ParsedPromise', ()=>{
    it('should reject promise and return error', ()=>{
        return (expect(parsedPromise(343)).rejects.toEqual(`[SyntaxError: Unexpected token u in JSON at position 0]`));
    });

    it ('should resolve promise and return json object', ()=>{
        return (expect(parsedPromise({"name": 'Gur'})).resolves.toEqual());
    });
});