const attachTitle = name => 'DR. '+name;

const promise = Promise.resolve('MANHATTAN').then(attachTitle).then(arg => arg);
module.exports = promise;