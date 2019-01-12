function doubleAll(numbers){
    var result = numbers.map(function x2(number){
        return number*2;
    });

    return result;
}

module.exports = doubleAll;