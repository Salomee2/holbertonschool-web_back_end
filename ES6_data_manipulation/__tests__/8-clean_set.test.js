import cleanSet from '../8-clean_set.js';

describe('cleanSet', () => {
	test('cleans a set with a prefix correctly', () => {
		const input = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
		expect(cleanSet(input, 'bon')).toBe('jovi-aparte-appetit');
	});

	test('returns empty string for empty prefix', () => {
		const input = new Set(['bonjovi']);
		expect(cleanSet(input, '')).toBe('');
	});

	test('returns empty string if no matches', () => {
		const input = new Set(['apple', 'banana']);
		expect(cleanSet(input, 'bon')).toBe('');
	});

	test('ignores non-strings in set', () => {
		const input = new Set(['bonheur', 42, null]);
		expect(cleanSet(input, 'bon')).toBe('heur');
	});
});
