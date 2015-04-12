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
        var equation;
        var count = 0;
        var string = str;

        for (var z = 0; z < string.length; z++) {
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

                equation = parentheticals[i].replace(/[()]/g, '');

                result = listToNumber(equation.split(''));

                str = this.replaceParenStatement(str, parentheticals[i], result);


            }
        }

        return str;
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
    }
};
