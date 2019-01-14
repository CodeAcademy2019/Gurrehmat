function reduce(arr,fn,initial){
    if (!arr.length){ 
        return {};
    }
    var x = fn(initial,arr[0],0,arr);
    return Object.assign(x, reduce(arr.slice(1),fn,initial))
}

module.exports=reduce