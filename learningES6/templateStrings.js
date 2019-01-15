const intro = (name)=>{
    var res = `Hello, ${name}!
    Your name lowercased is "${name.toLowerCase()}".`;
    console.log(res);
    return res;
}
//intro();
module.exports = intro;
