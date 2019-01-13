var inputs = process.argv.slice(2);
//console.log(inputs);
var result = inputs.map(str => str.charAt(0)).reduce((result,x)=> result + x,``);
//console.log(result);
console.log(`[${inputs}] becomes "${result}"`);
