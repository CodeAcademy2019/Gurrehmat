const firstChars = (...inputs) => {
    //console.log(inputs);
    var res = inputs.map(str => str.charAt(0)).reduce((result,x)=> result + x,'');
    //console.log(result);
    var finalResult = `[${inputs}] becomes "${res}"`;
    console.log(finalResult);
    return finalResult;
}

module.exports = firstChars;