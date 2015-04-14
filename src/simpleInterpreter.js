function Interpreter()
{
    this.vars = {};
    this.functions = {};
}

Interpreter.prototype.tokenize = function (program)
{
    if (program === ""){

        return [];
    }

    var regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
    return program.split(regex).filter(function (s) { return !s.match(/^\s*$/); });
};

Interpreter.prototype.input = function (expr)
{
    var tokens = this.tokenize(expr);

    if(/[^\d+-/*%\s]/g.test(tokens)){
        this.sortVarsFunc(tokens)
    } else {
        return this.calc(tokens.join(''));
    }
};

Interpreter.prototype.doOperation = function (op1, op2, op3){

};


Interpreter.prototype.sortVarsFunc = function(tokens) {

};

Interpreter.prototype.calc = function (expression) {
  var tokens = expression.match(/\d+\.\d+|\d+|[-+*/\(\)]/g).map(function(t){ return isNaN(t) ? t : Number(t); });
  function accept(sym){ return (tokens[0] == sym) && tokens.shift() }
  function acceptNumber(){ return !isNaN(tokens[0]) && tokens.shift() }
  function acceptAny(arr){ return arr.some( function(a){ return a == tokens[0]} ) && tokens.shift() }
  function doOp(x, op, y){ return [function(a,b){ return a + b;}, function(a,b){ return a - b; }, function(a,b){ return a * b; }, function(a,b){ return a / b; }][("+-*/".indexOf(op))](x,y); }
  function unit(){ return accept('(') ? (e = expr(), accept(')'), e) : acceptNumber(); }
  function unary(){ return accept('-') ? -unit() : unit(); }
  function factor(){ for (var x = unary(); op = acceptAny(['*','/']); x = doOp(x, op, unary())); return x; }
  function expr(){ for (var x = factor(); op = acceptAny(['+','-']); x = doOp(x, op, factor())); return x; }
  return expr();
};