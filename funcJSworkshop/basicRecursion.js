function reduce(arr, fn, initial) {
    result= initial;
    if (!arr.length) return []             
    var head = arr[0];
    result=fn(result,arr[0]);
    var tail = items.slice(1)                // next
    return [head].concat(toUpperArray(tail))
  }