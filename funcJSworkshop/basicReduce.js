/*const myFunction = (result, currentString) => {
    result[currentString] = result[currentString]? result[currentString] + 1 : 1;
    return result;

}*/

const hash = {};

function countWords(inputWords) {
    
    return inputWords.reduce(function reducer(result, currentString){
        result[currentString] = result[currentString]? result[currentString]+1 :1;
    },hash);
  }

  module.exports = countWords