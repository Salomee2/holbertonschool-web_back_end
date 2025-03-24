import getBudgetForCurrentYear from '../8-getBudgetCurrentYear.js';

describe('Task 8 - Computed property names', () => {
	test('Returns correct object with dynamic keys', () => {
		expect.assertions(1);
		const year = new Date().getFullYear();
		expect(getBudgetForCurrentYear(2100, 5200, 1090)).toEqual({
			[`income-${year}`]: 2100,
			[`gdp-${year}`]: 5200,
			[`capita-${year}`]: 1090,
		});
	});
});
