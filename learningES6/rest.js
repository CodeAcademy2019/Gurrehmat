function average(...args){
    return args.reduce((accumulator,currentValue) => accumulator+currentValue,0)/args.length;
}

module.exports = average;