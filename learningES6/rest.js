function average(...args){
    return args.reduce((accumulator,currentValue) => accumulator+currentValue)/args.length;
}

module.exports = average;