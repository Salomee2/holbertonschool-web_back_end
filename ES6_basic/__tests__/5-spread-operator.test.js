import concatArrays from '../5-spread-operator.js';

describe('Task 5 - Spread syntax', () => {
	test('Concatenates arrays and spreads string', () => {
		expect.assertions(1);
		expect(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')).toEqual([
			'a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o'
		]);
	});
});
