import divideFunction from '../8-try.js';

describe('divideFunction', () => {
	test('should divide normally when denominator is not 0', () => {
		expect(divideFunction(10, 2)).toBe(5);
	});

	test('should throw an error when dividing by 0', () => {
		expect(() => divideFunction(10, 0)).toThrow('cannot divide by 0');
	});
});
