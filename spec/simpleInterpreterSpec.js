var interpreter = new Interpreter();

describe('simple interpreter', function () {
    it('takes in an expression and returns a result', function () {
        expect(interpreter.input("1+1")).toEqual(2);
    });
});

describe('sortVarFunc', function () {
   it('takes in a list of tokens and sorts the token into functions and variables', function(){
       interpreter.sortVarsFunc(['1','+','1']);
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