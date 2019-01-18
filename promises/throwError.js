let inputJSON = process.argv[2];

const parsePromised = (json) => new Promise((fulfill,reject)=>{
    try{
        fulfill(JSON.parse(json));
    } catch(e) {
        reject(e);
    }
});

const onReject = (error) => {
    console.log(error.message);
    //return error;
}

parsePromised(inputJSON).then(null,onReject);

module.exports = parsePromised;