import getBudgetObject from '../7-getBudgetObject.js';

describe('Task 7 - Object shorthand', () => {
	test('Returns object with correct properties and values', () => {
		expect.assertions(1);
		expect(getBudgetObject(400, 700, 900)).toEqual({
			income: 400,
			gdp: 700,
			capita: 900
		});
	});
});
