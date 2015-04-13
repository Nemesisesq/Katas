/**
 * Created by Nem on 4/11/15.
 */

var calc = {

    test: function () {
        return "Hello, World";
    },

    replaceParenStatement: function (str, paren, result) {
        return str.replace(paren, result);
    },

    cleanString: function (str) {
        return str.replace(/\s/g, '');
    },

    parenCleaner: function (str) {
        var reg = /\([^\(\)]+\)+/;
        var result;
        var dirtyEq;
        var count = 0;


        for (var z = 0; z < str.length; z++) {
            if (this.isParenthetical(str[z])) {
                count = count + 1;
            }
        }


        for (var r = 0; r < count; r++) {

            var parentheticals = reg.exec(str);

            if (!parentheticals) {
                break;
            }

            for (var i = 0; i < parentheticals.length; i++) {

                dirtyEq = parentheticals[i].replace(/[()]/g, '');

                result = this.doCalculation(dirtyEq);

                //result = listToNumber(eq);

                str = this.replaceParenStatement(str, parentheticals[i], result);


            }
        }

        return str;
    },

    doCalculation : function(equation){
        var result = this.doMultiplicationAndDivision(equation);
        result = this.doAdditionAndSubtraction(result);

        return result;
    },

    doubleOperatorCleaner: function (str) {
        var list = this.stringtolist(str);
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
        return list.join('');

    },

    doMultiplicationAndDivision: function (str) {
        var list = this.stringtolist(str);
        for (var i = 0; i < list.length; i++) {
            if (this.isOperator(list[i]) && (list[i]) === '*' || list[i] === '/') {

                var op1, op2;

                if (list[i - 1].search(/\./) !== 0) {

                    op1 = parseFloat(list[i - 1]);
                } else {
                    op1 = parseInt(list[i - 1]);
                }


                if (list[i + 1].search(/\./)) {

                    op2 = parseFloat(list[i + 1]);
                } else {
                    op2 = parseInt(list[i + 1]);
                }


                var result = this.doOperation(op1, op2, list[i]);
                list[i - 1] = result.toString();

                list.splice(i, 2);
            }
        }
        return list.join('');
    },

    doAdditionAndSubtraction: function (str) {
        var list = this.stringtolist(str);
        for (var i = 0; i < list.length; i++) {
            if (this.isOperator(list[i]) && (list[i]) === '+' || list[i] === '-') {

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


                var result = this.doOperation(op1, op2, list[i]);
                list[i - 1] = result.toString();

                list.splice(i, 2);
            }
        }
        return list.join('');
    },

    doOperation: function (op1, op2, operator) {
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
    },

    isParenthetical: function (char) {
        var reg = /[()]/;
        return !!reg.exec(char);

    },

    isOperator: function (char) {
        var reg = /[+-/*]/;
        return !!reg.exec(char);
    },

    isANumber: function (char) {
        var reg = /\d/;
        return !!reg.exec(char);
    },

    isDecimal: function (char) {
        var reg = /\./;
        return !!reg.exec(char);
    },

    stringtolist: function (dirtyExpression) {
        // evaluate `expression` and return result
        var stagedOperand = "";
        var collectionList = [];

        var dirtyList = dirtyExpression.split('');

        var cleanedList = dirtyList.filter(function (char) {
            return /\S/.test(char);
        });
        var expression = cleanedList.join('');

        for (var i = 0; i < expression.length; i++) {
            if (this.isANumber(expression[i]) || this.isDecimal(expression[i])) {
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
    }
};
