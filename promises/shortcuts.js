const resolvedPromise=Promise.resolve('Promise is fulfilled.');
const rejectedPromise=Promise.reject('Promise has been REJECTED!');

resolvedPromise.then(console.log);
rejectedPromise.catch(console.log);

module.exports={ resolvedPromise, rejectedPromise };
