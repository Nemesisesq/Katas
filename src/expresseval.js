var calc = function (expression) {
    // evaluate `expression` and return result
    var stagedOperand = "";
    var collectionList = [] ;
 
    for(var i = 0; i < expression.length; i++){
        if(parseInt(expression[i])){
            stagedOperand += expression[i];
 
        } else {
            collectionList.push(stagedOperand);
            stagedOperand = "";
        }
 
        var reg = /[+-/*]/;
        if(reg.exec(expression[i])){
            collectionList.push(expression[i]);
        }
    }
    collectionList.push(stagedOperand);
 
    console.log(collectionList);
    console.log("Hello World");
};
 
calc('1+1');
calc('11+22');