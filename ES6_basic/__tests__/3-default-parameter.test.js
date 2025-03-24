import getSumOfHoods from '../3-default-parameter.js';

describe('Task 3 - Default parameters', () => {
	test('No parameters passed for expansions', () => {
		expect.assertions(1);
		expect(getSumOfHoods(34)).toBe(142); // 34 + 89 + 19
	});

	test('One parameter passed for expansion1989', () => {
		expect.assertions(1);
		expect(getSumOfHoods(34, 3)).toBe(56); // 34 + 3 + 19
	});

	test('All parameters passed', () => {
		expect.assertions(1);
		expect(getSumOfHoods(34, 3, 4)).toBe(41); // 34 + 3 + 4
	});
});
