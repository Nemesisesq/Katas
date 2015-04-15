var interpreter = new Interpreter();

describe('simple interpreter basic arithmetic', function () {
    it('takes in an expression and returns a result', function () {
        expect(interpreter.input("1 + 1")).toEqual(2);
        expect(interpreter.input("2 - 1")).toEqual(1);
        expect(interpreter.input("2 * 3")).toEqual(6);
        expect(interpreter.input("8 / 4")).toEqual(2);
        expect(interpreter.input("7 % 4")).toEqual(3);
        expect(interpreter.input("20 + 1")).toEqual(21);
    });
});

describe('simple interpreter variable assignment', function () {
    it('take in an expression that assigns a variable', function () {
        expect(interpreter.input("x = 1")).toEqual(1);
    });

    it('it receives a variable and returns the value of the variable', function () {
        expect(interpreter.input("x")).toEqual(1);
    });

    it('receives an expression with a variable and returns value', function () {
        expect(interpreter.input("x + 3")).toEqual(4);
    });

    it('receives a single variable and returns and error', function () {
        expect(function () {
            interpreter.input("y");
        }).toThrow(new Error('parsing is not possible'));
    });

    it('receives an empty input and handle it', function () {
        expect(interpreter.input("")).toBe("");
    });

    it('should continue to function if an error is thrown', function () {
        expect(interpreter.input("x = 7 ")).toBe(7);
        expect(interpreter.input("y=x+5")).toBe(12);
        expect(interpreter.input("y")).toBe(12);
    });

});

describe('sortVarFunc', function () {
    it('takes in a list of tokens and sorts the token into functions and variables', function () {
        interpreter.parseToken(['1', '+', '1']);
        expect(interpreter.functions[0]).toEqual("additions:[['1','+','1']]");
    });
});


/*/
 Basic arithmetic
 Test.assertSimilar(interpreter.input("1 + 1"), 2);
 Test.assertSimilar(interpreter.input("2 - 1"), 1);
 Test.assertSimilar(interpreter.input("2 * 3"), 6);
 Test.assertSimilar(interpreter.input("8 / 4"), 2);
 Test.assertSimilar(interpreter.input("7 % 4"), 3);

 //Variables
 Test.assertSimilar(interpreter.input("x = 1"), 1);
 Test.assertSimilar(interpreter.input("x"), 1);
 Test.assertSimilar(interpreter.input("x + 3"), 4);
 Test.expectError(function() { interpreter.input("y"); });
 */