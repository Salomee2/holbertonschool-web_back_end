import Currency from '../3-currency.js';

describe('Task 3 - Currency', () => {
	test('should return correct displayFullCurrency string', () => {
		const dollar = new Currency('$', 'Dollars');
		expect(dollar.displayFullCurrency()).toBe('Dollars ($)');
	});

	test('should throw error for non-string code', () => {
		expect(() => new Currency(123, 'Dollars')).toThrow(TypeError);
	});

	test('should throw error for non-string name', () => {
		expect(() => new Currency('$', 100)).toThrow(TypeError);
	});

	test('should allow updating name and code via setters', () => {
		const euro = new Currency('€', 'Euros');
		euro.name = 'Eurozone';
		euro.code = 'EUR';
		expect(euro.displayFullCurrency()).toBe('Eurozone (EUR)');
	});
});