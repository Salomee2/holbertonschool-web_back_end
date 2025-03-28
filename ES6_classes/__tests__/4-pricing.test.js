import Currency from '../3-currency.js';
import Pricing from '../4-pricing.js';

describe('task 4 - Pricing', () => {
  it('should create a Pricing instance with correct amount and currency', () => {
    const currency = new Currency('USD', 'Dollars');
    const price = new Pricing(50, currency);

    expect(price.amount).toBe(50);
    expect(price.currency).toBe(currency);
    expect(price.currency.code).toBe('USD');
    expect(price.currency.name).toBe('Dollars');
  });

  it('displayFullPrice should return the correct string', () => {
    const currency = new Currency('EUR', 'Euro');
    const price = new Pricing(100, currency);
    expect(price.displayFullPrice()).toBe('100 Euro (EUR)');
  });

  it('convertPrice should return correct conversion', () => {
    expect(Pricing.convertPrice(100, 1.2)).toBe(120);
  });

  it('should throw error on invalid amount type', () => {
    const currency = new Currency('EUR', 'Euro');
    expect(() => new Pricing('not-a-number', currency)).toThrow(TypeError);
  });

  it('should throw error on invalid currency type', () => {
    expect(() => new Pricing(50, 'USD')).toThrow(TypeError);
  });
});
