import getFullBudgetObject from '../9-getFullBudget';

describe('Task 9 - Method properties', () => {
	test('Should return full budget object with income, gdp, and capita', () => {
		expect.assertions(1);
		const fullBudget = getFullBudgetObject(20, 50, 10);
		expect(fullBudget).toMatchObject({
			income: 20,
			gdp: 50,
			capita: 10,
		});
	});

	test('Should return correct income in dollars', () => {
		expect.assertions(1);
		const fullBudget = getFullBudgetObject(20, 50, 10);
		expect(fullBudget.getIncomeInDollars(fullBudget.income)).toBe('$20');
	});

	test('Should return correct income in euros', () => {
		expect.assertions(1);
		const fullBudget = getFullBudgetObject(20, 50, 10);
		expect(fullBudget.getIncomeInEuros(fullBudget.income)).toBe('20 euros');
	});
});
