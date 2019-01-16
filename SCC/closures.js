function foo(){
    quux = 3;
    function zip(){
        var quux = 5;
        bar = true;
    }
    var bar;

    return zip;
}