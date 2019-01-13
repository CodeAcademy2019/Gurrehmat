function duckCount() {
    /*return args.reduce(function (total,object) { 
        if (Object.getPrototypeOf(object) === Object.prototype){
            object.hasOwnProperty('quack')? total +=1: total+=0;
        } else if (Object.getPrototypeOf(object) === null){
            Object.prototype.hasOwnProperty.call(object, 'quack')? total+=1:total+=0;
        }
    },0);*/
    return 0;
}

module.exports = duckCount;