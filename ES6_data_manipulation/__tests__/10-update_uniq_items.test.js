import updateUniqueItems from '../10-update_uniq_items.js';

describe('updateUniqueItems', () => {
	test('updates values of 1 to 100 in a Map', () => {
		const map = new Map([
			['Apples', 10],
			['Pasta', 1],
			['Rice', 1],
		]);
		updateUniqueItems(map);
		expect(map.get('Apples')).toBe(10);
		expect(map.get('Pasta')).toBe(100);
		expect(map.get('Rice')).toBe(100);
	});

	test('throws an error if input is not a Map', () => {
		expect(() => updateUniqueItems({})).toThrow('Cannot process');
		expect(() => updateUniqueItems([])).toThrow('Cannot process');
		expect(() => updateUniqueItems('not a map')).toThrow('Cannot process');
	});
});
