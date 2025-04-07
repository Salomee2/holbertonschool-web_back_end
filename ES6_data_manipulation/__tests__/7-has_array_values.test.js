import hasValuesFromArray from '../7-has_array_values.js';

describe('hasValuesFromArray', () => {
	test('returns true when all array elements exist in the set', () => {
		const s = new Set([1, 2, 3]);
		expect(hasValuesFromArray(s, [1, 2])).toBe(true);
	});

	test('returns false when at least one element is missing', () => {
		const s = new Set([1, 2, 3]);
		expect(hasValuesFromArray(s, [2, 4])).toBe(false);
	});

	test('returns true for empty array', () => {
		const s = new Set([1, 2, 3]);
		expect(hasValuesFromArray(s, [])).toBe(true);
	});
});
