const newLineCounter = require('./firstIO');

describe('newLineCounter', () => {
  it('should return 3 for file three.txt', ()=>{
    process.argv = ['node', 'firstIO.js','testFilesEx3/three.txt'];
    expect(newLineCounter()).toEqual(3);
  });
});
