/**
 * Created by Nem on 4/11/15.
 */

describe('test my test', function () {
    it('says hello world', function () {
        expect(calcObj.test()).toBe('Hello, World');
    });
});


describe('parenthetical cleaner', function () {
    it('takes in a string and computes the parenteticals', function () {
        expect(calcObj.parenCleaner('1+(2.4*3)+3')).toEqual('1+7.2+3');
    });

    it('takes in a string with two parenthetical statements', function () {
        expect(calcObj.parenCleaner('1+(2*5)+4*(4+5.4)-1')).toEqual('1+10+4*9.4-1');
    });
});

describe('parenthesis replacement', function () {
    it('takes in string with parenthetical, replaces it with "x"', function () {
        expect(calcObj.replaceParenStatement('1+(2*3)+3', '(2*3)', 'x')).toEqual('1+x+3');
    });

});


describe('cleanString', function () {
    it('removes all whitespace from a string', function () {
        expect(calcObj.cleanString('1 + 1 + 3 ')).toEqual('1+1+3');
    });
});

describe('list cleaner', function () {
    it('rectifies double negatives and makes the positive', function () {
        expect(calcObj.doubleOperatorCleaner('2--2')).toEqual('2+2');
    });

    it('rectifies differing operators to a negative', function () {
        expect(calcObj.doubleOperatorCleaner('2-+2')).toEqual('2-2');
    });
});


describe('order operations', function () {
    it('performs multiplication before addition or subtraction', function () {
        expect(calcObj.doMultiplicationAndDivision('2+3*4-5')).toEqual('2+12-5');
    });

    it('performs division before addition or subtraction', function () {
        expect(calcObj.doMultiplicationAndDivision('2+30/3+5')).toEqual('2+10+5');
    });
});

describe('addition and subtraction', function () {
    it('takes in a string and does addition', function () {
        expect(calcObj.doAdditionAndSubtraction('1+1')).toEqual('2');
    });

    it('takes in a string and does subtraction', function () {
        expect(calcObj.doAdditionAndSubtraction('2-1')).toEqual('1');
    });
});
describe('srting to list',function(){
   it('takes in a string with numbers and operators and returns the correct list', function(){
       expect(calcObj.stringtolist('-1 + 2')).toEqual(['-1','+','2']);
   });
});
describe('stringCalculator', function () {
    it('should take in an equation string and return a result', function () {
        var tests = [
            [ "((80 - (19)))", 61],
            [ "12* 123/-(-5 + 2)", 492],
            ['12*-1', -12],
            ['1+1', 2],
            ['1 - 1', 0],
            ['1* 1', 1],
            ['1 /1', 1],
            ['-123', -123],
            ['123', 123],
            ['2 /2+3 * 4.75- -6', 21.25],
            ['12* 123', 1476],
            ['2 / (2 + 3) * 4.33 - -6', 7.732]


        ];

        tests.forEach(function (m) {
           expect(calc(m[0])).toEqual(m[1]);
        });

    });
});