let promise = new Promise((fulfill,reject) => {
    setTimeout(
        fulfill('PROMISE VALUE')
        ,0);
});

promise.then(console.log);
console.log('MAIN PROGRAM');