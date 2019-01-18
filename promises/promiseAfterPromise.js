const first = ()=>{
    return Promise.resolve('Fulfilled Successfully!');
};
const second = (value)=>{
    return Promise.resolve(value+' from second function');
}
const a = first();

const b=a.then((onResolveArgument) =>{
    c=second(onResolveArgument);
    return c;
    
})
b.then(console.log)

module.exports={a,b}