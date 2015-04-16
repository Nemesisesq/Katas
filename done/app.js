/*function test() {
    return "Hello, World";
}


function isOperator(char) {
    var reg = /[+-/*]/;
    return !!reg.exec(char);

}

function isParenthetical(char) {
    var reg = /[()]/;
    return !!reg.exec(char);
}

function isANumber(char) {
    var reg = /\d/;
    return !!reg.exec(char);
}

function isDecimal(char) {
    var reg = /\./;
    return !!reg.exec(char);
}
var stringtolist = function (dirtyExpression) {
    // evaluate `expression` and return result
    var stagedOperand = "";
    var collectionList = [];

    var dirtyList = dirtyExpression.split('');

    var cleanedList = dirtyList.filter(function (char) {
        return /\S/.test(char);
    });
    var expression = cleanedList.join('');

    for (var i = 0; i < expression.length; i++) {
        if (isANumber(expression[i]) || isDecimal(expression[i])) {
            stagedOperand += expression[i];

        } else {

            if (stagedOperand) {
                collectionList.push(stagedOperand);
                stagedOperand = "";
            }

        }

        if (isOperator(expression[i])) {
            collectionList.push(expression[i]);
        }

        if (isParenthetical(expression[i])) {

            collectionList.push(expression[i]);
        }
    }
    collectionList.push(stagedOperand);

    var dot = collectionList.indexOf('.');

    if (dot !== -1) {
        collectionList.splice(dot, 1);
    }


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
    for (var i = 0; i < list.length; i++) {
        if (isOperator(list[i]) && (list[i]) === '*' || list[i] === '/') {

            var op1, op2;

            if (list[i - 1].search(".") !== 0) {

                op1 = parseFloat(list[i - 1]);
            } else {
                op1 = parseInt(list[i - 1]);
            }


            if (list[i + 1].search(/\./)) {

                op2 = parseFloat(list[i + 1]);
            } else {
                op2 = parseInt(list[i + 1]);
            }


            var result = smoothOperator(op1, op2, list[i]);
            list[i - 1] = result.toString();

            list.splice(i, 2);
        }
    }
    return list;
}


function listToNumber(dirtylist) {
    var list = doubleOperatorListCleaner(dirtylist);
    list = multiplicationListReducer(list);
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
                op2 = parseFloat(list[i]);
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


function parenthesesListReducer(dirtyList) {
    var reg = /\([^\(\)]*\)/g;
    var string = dirtyList.join('');

    var re;


    var equation;

    var parentheticals = reg.exec(string);

    for (var i = 0; i < parentheticals.length; i++) {

        equation = parentheticals[i].replace(/[()]/g,'');

        re = listToNumber(equation.split(''));

        string = string.replace(parentheticals[i], re);


    }
    console.log(string);
    return string.split('');


}

doubleOperatorListCleaner(['2', '-', '-', '2']);
//var ty = stringtolist('10+10+3+4+5+6+7+8+9+1');
var x = stringtolist('2 /2+3 * 4.75- -6');
listToNumber(x);

multiplicationListReducer(['2', '+', '2', '*', '8']);

    */