const splitString = (inputString,splitter) => inputString.split(splitter);
var retString = ``;
const trade = (inputString) => {
    let lines = inputString.split('\n').map(line => 
        line.split(' ').map(value => parseInt(value,10)));
    
    let i=0;
    do{
        const stacks =[];
        var individualProfits= [];
        var cumulativeProfits= [];
        var sum;
        var maxProfits = [];
        var maxProfitIndices = [];
        var possiblePurchases = [];
        if(lines[i].length === 1){
            for(j=0;j<lines[i][0];j+=1){
                stacks.push(lines[i+j+1].slice(1));
            }
            
        }
        individualProfits = stacks.map(stack => stack.map(x => 10-x));
        for(j=0;j<individualProfits.length;j+=1){
            sum = 0;
            cumulativeProfits.push(individualProfits[j].map(x =>{
                sum+=x;
                return sum;
            }));
            maxProfits[j]= Math.max(...cumulativeProfits[j]);
        }
        for(j=0;j<cumulativeProfits.length;j+=1){
            let temp = [];
            for(k=0;k<cumulativeProfits[j].length;k++){
                if(cumulativeProfits[j][k] === maxProfits[j]){
                    temp.push(k);
                }
            }
            maxProfitIndices.push(temp);
        }
        var totalMax = maxProfits.reduce((accumulator, value)=> accumulator+value,0);
        
        i+=lines[i][0]+1;
        console.log(totalMax);
        retString = retString + totalMax + ' ';
    }while (lines[i][0]!==0);

    return retString;

}


module.exports = {trade,splitString};