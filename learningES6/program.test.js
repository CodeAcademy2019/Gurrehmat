import hello from './program'
describe('hello', ()=> {
    it('should output hello', () => {
        expect(hello()).toBe('HELLO ES6');
    });
});