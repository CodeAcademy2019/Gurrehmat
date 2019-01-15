const html = (sentence,...vars)=>{
    vars = vars.map(a=>a.replace(/&/g,"&amp;")
                        .replace(/'/g,"&apos;")
                        .replace(/"/g,"&quot;")
                        .replace(/</g,"&lt;")
                        .replace(/>/g,"&gt;"));
    return sentence[0]+vars[0]+sentence[1]+vars[1]+sentence[2];
}

const prog = ()=>{
var output=html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`;
console.log(output);
return output;
}
prog();

module.export=prog;