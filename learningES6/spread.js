const spread = (...numbers)=>{
    //var numbers = process.argv.slice(2);
    output = `The minimum of [${numbers}] is ${Math.min(...numbers)}`;
    console.log(output);
    return output;
}

module.exports = spread;