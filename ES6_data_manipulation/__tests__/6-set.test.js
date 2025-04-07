import setFromArray from '../6-set.js';

describe('setFromArray', () => {
	test('returns a Set with unique elements', () => {
		const input = [1, 2, 3, 2, 1];
		const result = setFromArray(input);
		expect(result instanceof Set).toBe(true);
		expect([...result]).toEqual([1, 2, 3]);
	});

	test('works with empty array', () => {
		expect(setFromArray([])).toEqual(new Set());
	});
});
