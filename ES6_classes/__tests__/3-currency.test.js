import Currency from '../3-currency.js';

describe('task 3 - Currency', () => {
  it('should return correct displayFullCurrency string', () => {
    const dollar = new Currency('$', 'Dollars');
    expect(dollar.displayFullCurrency()).toBe('Dollars ($)');
  });

  it('should throw error for non-string code', () => {
    expect(() => new Currency(123, 'Dollars')).toThrow(TypeError);
  });

  it('should throw error for non-string name', () => {
    expect(() => new Currency('$', 100)).toThrow(TypeError);
  });

  it('should allow updating name and code via setters', () => {
    const euro = new Currency('€', 'Euros');
    euro.name = 'Eurozone';
    euro.code = 'EUR';
    expect(euro.displayFullCurrency()).toBe('Eurozone (EUR)');
  });
});
