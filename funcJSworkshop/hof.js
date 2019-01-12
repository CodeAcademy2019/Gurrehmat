function repeat(operation, num){
    if(num>0){
        operation();
        num-=1;
    } else {
        return;
    }
}
module.exports = repeat;