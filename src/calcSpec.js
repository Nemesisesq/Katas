/**
 * Created by Nem on 4/11/15.
 */

describe('test my test', function () {
    it('says hello world', function () {
        expect(calc.test()).toBe('Hello, World');
    });
});


describe('parenthetical cleaner', function () {
    it('takes in a string and computes the parenteticals', function () {
        expect(calc.parenCleaner('1+(2*3)+3')).toEqual('1+6+3');
    });

    it('takes in a string with two parenthetical statements', function () {
        expect(calc.parenCleaner('1+(2*5)+4*(4+5)-1')).toEqual('1+10+4*9-1');
    });
});

describe('parenthesis replacement', function () {
    it('takes in string with parenthetical, replaces it with "x"', function () {
        expect(calc.replaceParenStatement('1+(2*3)+3', '(2*3)', 'x')).toEqual('1+x+3');
    });

});


describe('cleanString', function () {
    it('removes all whitespace from a string', function () {
        expect(calc.cleanString('1 + 1 + 3 ')).toEqual('1+1+3');
    });
});