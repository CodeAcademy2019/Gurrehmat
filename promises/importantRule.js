const outputArray = [];

const alwaysThrows = () => {
    throw new Error('OH NOES');
}

const iterate = (val) => {
    outputArray.push(val);
    console.log(val);
    return val+1;
}

const onReject = (error) =>{
    outputArray.push(error.message);
    console.log(error.message);
    return error.message;
}

const promiseChain = Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(onReject);

    module.exports = {promiseChain,iterate,alwaysThrows,outputArray};