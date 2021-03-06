function Interpreter() {
    this.vars = {};
    this.functions = {};
}

Interpreter.prototype.tokenize = function (program) {
    if (program === "") {

        return [];
    }

    var regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
    return program.split(regex).filter(function (s) {
        return !s.match(/^\s*$/);
    });
};

Interpreter.prototype.input = function (expr) {
    var tokens = this.tokenize(expr);

    if (tokens.length === 0) {
        return "";
    }

    if (tokens.length === 1) {
        if (this.vars[tokens[0]]) {

            return this.vars[tokens[0]];
        } else {
            throw new Error('parsing is not possible');
        }
    }

    if (/[^\d+-/*%\s]/g.test(tokens)) {

        var output = this.parseToken(tokens);
        return output;
    } else {
        return this.calc(tokens.join(''));
    }


};

Interpreter.prototype.parseToken = function (tokens) {
    this.evalToken = false;

    for (var i = 0; i < tokens.length; i++) {
        if (/=/.test(tokens[i]) && this.vars[tokens[i - i]]) {
            this.vars[tokens[i - 1]] = tokens[i + 1];
        }
    }

    for (var i = 0; i < tokens.length; i++) {

        if (this.vars[tokens[i]]) {

            tokens[i] = this.vars[tokens[i]];
        }
    }

    if (!/[^\d\s+-/*%()]/g.test(tokens.join(''))) {
        this.evalToken = true;
    }

    if (this.evalToken) {
        return this.calc(tokens.join(''))
    }

    var key = "";
    var value = 0;
    for (var i = 0; i < tokens.length; i++) {

        if (/=/.test(tokens[i])) {
            key = tokens[i - 1];
            value = tokens.slice(i+1 , tokens.length);
            this.vars[key] = value;

        }
    }
    return this.vars[key];
};


Interpreter.prototype.calc = function (expression) {
    var tokens = expression.match(/\d+\.\d+|\d+|[-+*%/\(\)]/g).map(function (t) {
        return isNaN(t) ? t : Number(t);
    });

    function accept(sym) {
        return (tokens[0] == sym) && tokens.shift()
    }

    function acceptNumber() {
        return !isNaN(tokens[0]) && tokens.shift()
    }

    function acceptAny(arr) {
        return arr.some(function (a) {
                return a == tokens[0]
            }) && tokens.shift()
    }

    function doOp(x, op, y) {
        return [function (a, b) {
            return a + b;
        }, function (a, b) {
            return a - b;
        }, function (a, b) {
            return a * b;
        }, function (a, b) {
            return a % b
        }, function (a, b) {
            return a / b;
        }][("+-*%/".indexOf(op))](x, y);
    }

    function unit() {
        return accept('(') ? (e = expr(), accept(')'), e) : acceptNumber();
    }

    function unary() {
        return accept('-') ? -unit() : unit();
    }

    function factor() {
        for (var x = unary(); op = acceptAny(['*', '/', '%']); x = doOp(x, op, unary()));
        return x;
    }

    function expr() {
        for (var x = factor(); op = acceptAny(['+', '-']); x = doOp(x, op, factor()));
        return x;
    }

    return expr();
};
