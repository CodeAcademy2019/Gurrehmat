const executer = (fulfill,reject) => {
    setTimeout(() => {
        fulfill('FULFILLED!');
    }, 300);
}
let promise = new Promise(executer);
promise.then(console.log);

module.exports = {executer,promise};