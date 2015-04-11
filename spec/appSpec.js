describe('test my test', function() {
	it('says hello world', function() {
		expect(test()).toBe('Hello, World');
	});
});


describe('Expression evaluator', function() {
	it('expects stringtolist to return true', function() {
		expect(stringtolist('1+1')).toEqual(['1', '+', '1']);
		expect(stringtolist('11 + 345 - 55')).toEqual(['11', '+', '345', '-', '55']);
	});

	it(' takes a list and returns a result', function() {
		expect(listToNumber(stringtolist('1+1'))).toEqual(2);

		it('takes two numbers and an operator and returns a result', function() {
			expect(smoothOperator(2, 2, '+')).toBe(4);
		});
	});
});

describe('isOperator', function(){
	it('take a pluse sign and returns true', function(){
		expect(isOperator('+')).toBe(true);
	});
});