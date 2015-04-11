function test() {
    return "Hello, World";
}


function isOperator(char) {
    var reg = /[+-/*]/;
    return !!reg.exec(char);

}


var stringtolist = function (dirtyExpression) {
    // evaluate `expression` and return result
    var stagedOperand = "";
    var collectionList = [];

    var expression = dirtyExpression.replace(" ", "");

    for (var i = 0; i < expression.length; i++) {
        if (parseInt(expression[i]) || expression[i] === "0" || expression[i] === ".") {
            stagedOperand += expression[i];

        } else {
            collectionList.push(stagedOperand);
            stagedOperand = "";
        }

        if (isOperator(expression[i])) {
            collectionList.push(expression[i]);
        }
    }
    collectionList.push(stagedOperand);

    return collectionList.filter(function (str) {
        return /\S/.test(str);
    });


};

function doubleOperatorListCleaner(dirtyList) {
    var list = dirtyList;
    var prefixOperator = '';
    for (var i = 0; i < list.length; i++) {
        if (isOperator(list[i]) && (list[i] === '+' || list[i] === '-')) {
            if (prefixOperator) {
                if (prefixOperator === list[i]) {
                    list[i] = '+';
                    list.splice(i - 1, 1);
                } else {
                    list[i] = '-';
                    list.splice(i - 1, 1);
                }
            } else {
                prefixOperator = list[i];
            }
        } else {
            prefixOperator = '';
        }
    }
    return list;
}


function smoothOperator(op1, op2, operator) {
    if (operator === '+') {
        return op1 + op2;
    }

    if (operator === '-') {
        return op1 - op2;
    }
    if (operator === '*') {
        return op1 * op2;
    }

    if (operator === '/') {
        return op1 / op2;
    }


}

function multiplicationListReducer(dirtyList) {
    var list = dirtyList;
    for(var i = 0; i < list.length; i++){
        if(isOperator(list[i]) && (list[i]) === '*' || list[i] === '/'){
            var op1  = list[i - 1];
            var op2  = list[i + 1];

            var result = smoothOperator(op1, op2, list[i]);
            list[i -1] = result.toString();

            list.splice(i,2);
        }
    }
    return list;
}


function listToNumber(dirtylist) {
    var list = doubleOperatorListCleaner(dirtylist);
    var op1 = '';
    var op2 = '';
    var operator = '';
    var prefix = '';
    for (var i = 0; i < list.length; i++) {
        if (op1 && op2 && operator) {
            op1 = smoothOperator(op1, op2, operator);
            op2 = '';
            operator = '';
        }

        if (op1) {
            if (parseInt(list[i])) {
                op2 = parseInt(list[i]);
            } else if (isOperator(list[i])) {
                operator = list[i];
            }
        } else if (isOperator(list[i]) && !op1) {

            prefix = list[i];

        } else if (prefix) {

            op1 = prefix + list[i];
            op1 = parseInt(op1);

        } else {

            op1 = parseInt(list[i]);
        }
    }

    var result = op1;

    if (op1 && op2 && operator) {
        result = smoothOperator(op1, op2, operator);
    }


    return result;
}

doubleOperatorListCleaner(['2', '-', '-', '2']);
var x = stringtolist('2 /2+3 * 4.75- -6');
listToNumber(x);

multiplicationListReducer(['2','+','2','*','8']);