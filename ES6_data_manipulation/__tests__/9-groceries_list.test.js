import groceriesList from '../9-groceries_list.js';

describe('groceriesList', () => {
	test('returns a Map with correct groceries', () => {
		const map = groceriesList();
		expect(map instanceof Map).toBe(true);
		expect(map.size).toBe(5);
		expect(map.get('Apples')).toBe(10);
		expect(map.get('Tomatoes')).toBe(10);
		expect(map.get('Pasta')).toBe(1);
		expect(map.get('Rice')).toBe(1);
		expect(map.get('Banana')).toBe(5);
	});
});
