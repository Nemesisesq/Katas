describe('test my test', function() {
  it('says hello world', function() {
    expect(test()).toBe('Hello, World');
  });
});


describe('Expression evaluator', function() {
  it('expects stringtolist to return a list of elements', function() {
    expect(stringtolist('11 + 345 - 55')).toEqual(['11', '+', '345', '-', '55']);
    expect(stringtolist('1+1')).toEqual(['1', '+', '1']);
  });

  it('should also return the parentheseses in the list', function() {
    expect(stringtolist('(4+5)')).toEqual(['(', '4', '+', '5', ')']);
  });

  it(' takes a list of 2 and returns a result', function() {
    var testList = stringtolist('1+1');
    expect(listToNumber(testList)).toEqual(2);

  });

  it(' takes a list of 3  and returns a result', function() {
    var testList = stringtolist('1+1+3');
    expect(listToNumber(testList)).toEqual(5);

  });

  it(' takes a list of 10  and returns a result', function() {
    var testList = stringtolist('1+1+3+4+5+6+7+8+9+10');
    expect(listToNumber(testList)).toEqual(54);

  });

  it('tests Minus', function() {
    var testList = stringtolist('2-1');
    expect(listToNumber(testList)).toEqual(1);
  });

  it('tests Multiplication', function() {
    var testList = stringtolist('2*10');
    expect(listToNumber(testList)).toEqual(20);
  });

  it('test multiplication with spaces', function() {
    var testList = stringtolist('20 * 5');
    expect(listToNumber(testList)).toEqual(100);
  });

  it('tests Division', function() {
    var testList = stringtolist('20/5');
    expect(listToNumber(testList)).toEqual(4);
  });

  it('test division with spaces', function() {
    var testList = stringtolist('20/ 5');
    expect(listToNumber(testList)).toEqual(4);
  });

  it('takes two numbers and an operator and returns a result', function() {
    expect(smoothOperator(2, 2, '+')).toBe(4);
  });

  it(
    'takes a single negative number  in a string and returns a negative nubmer ',
    function() {
      expect(listToNumber(['-', '123'])).toEqual(-123);
    });

  it('tests order of operations', function() {
    var testList = stringtolist('2 /2+3 * 4.75- -6');
    expect(listToNumber(testList)).toEqual(21.25);
  });


});

describe('isOperator', function() {
  it('take a pluse sign and returns true', function() {
    expect(isOperator('+')).toBeTruthy();
    expect(isOperator('-')).toBeTruthy();
    expect(isOperator('/')).toBeTruthy();
    expect(isOperator('*')).toBeTruthy();
    expect(isOperator('r')).toBeFalsy();

  });
});

describe('list cleaner', function() {
  it('rectifies double negatives and makes the positive', function() {
    expect(doubleOperatorListCleaner(['2', '-', '-', '2'])).toEqual(['2', '+',
      '2'
    ]);
  });

  it('rectifies differing operators to a negative', function() {
    expect(doubleOperatorListCleaner(['2', '+', '-', '2'])).toEqual(['2', '-',
      '2'
    ]);
  });
});

describe('parentheses operations', function() {
  it('picks expressions inside of parentheses', function() {
    expect(parenthesesListReducer(['1', '(', '1', '+', '2', ')', '1'])).toEqual('1+2');
  });
});

describe('order operations', function() {
  it('performs multiplication before addition or subtraction', function() {
    expect(multiplicationListReducer(['2', '+', '2', '*', '8'])).toEqual(['2',
      '+', '16'
    ]);

  });

  it('performs division before addition or subtraction', function() {
    expect(multiplicationListReducer(['2', '+', '8', '/', '2'])).toEqual(['2',
      '+', '4'
    ]);
  });

  it('performs operations in parentheseses first before anything', function() {
    var testList = stringtolist('2 * (4 + 5) + 4 + (10 * 5) - 40');
    expect(parenthesesListReducer(testList)).toEqual(32);
  });
});