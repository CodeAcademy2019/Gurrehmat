const prog = ()=>{
    var foot = {
        kick: function () {
            this.yelp = "Ouch!";
            setImmediate(()=>{
                console.log(this.yelp)
                return this.yelp;
            });
        }
    };
    return foot.kick();
}

prog();
module.exports = prog;