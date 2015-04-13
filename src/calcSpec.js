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
        expect(calc.parenCleaner('1+(2.4*3)+3')).toEqual('1+7.2+3');
    });

    it('takes in a string with two parenthetical statements', function () {
        expect(calc.parenCleaner('1+(2*5)+4*(4+5.4)-1')).toEqual('1+10+4*9.4-1');
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

describe('list cleaner', function() {
  it('rectifies double negatives and makes the positive', function() {
    expect(calc.doubleOperatorCleaner('2--2')).toEqual('2+2');
  });

  it('rectifies differing operators to a negative', function() {
    expect(calc.doubleOperatorCleaner('2-+2')).toEqual('2-2');
  });
});


describe('order operations', function() {
    it('performs multiplication before addition or subtraction', function () {
        expect(calc.doMultiplicationAndDivision('2+3*4-5')).toEqual('2+12-5');
    });

    it('performs division before addition or subtraction', function () {
        expect(calc.doMultiplicationAndDivision('2+30/3+5')).toEqual('2+10+5');
    });
});

describe('addition and subtraction', function () {
    it('takes in a string and does addition', function(){
        expect(calc.doAdditionAndSubtraction('1+1')).toEqual('2');
    });

    it('takes in a string and does subtraction', function(){
        expect(calc.doAdditionAndSubtraction('2-1')).toEqual('1');
    });
});