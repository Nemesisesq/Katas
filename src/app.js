function test() {
  return "Hello, World";
}


function isOperator(char) {
  var reg = /[+-/*]/;
  return reg.exec(char).isNotNull();
}


var stringtolist = function(expression) {
  // evaluate `expression` and return result
  var stagedOperand = "";
  var collectionList = [];

  for (var i = 0; i < expression.length; i++) {
    if (parseInt(expression[i])) {
      stagedOperand += expression[i];

    } else {
      collectionList.push(stagedOperand);
      stagedOperand = "";
    }

    if (isOperator(expression[i])) {
      collectionList.push(expression[i]);
    }
  }
  collectionList.push(stagedOperand);

  return collectionList.filter(function(str) {
    return /\S/.test(str);
  });

};

function smoothOperator(op1, op2, operator) {
  if (operator === '+') {
    return op1 + op2;
  }


}

function listToNumber(list) {
  var result = 0;
  var op1 = '';
  var op2 = '';
  var operator = '';
  for (var i = 0; i < list.length; i++) {
    if (op1, op2, operator) {
      op1 = smoothOperator(op1, op2, operator);
    }

    if (op1) {
      if (parseInt(list[i])) {
        op2 = parseInt(list[i]);
      } else if (isOperator(list[i])) {

      }
    }
  }
}