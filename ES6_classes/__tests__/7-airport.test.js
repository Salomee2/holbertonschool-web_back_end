import Airport from '../7-airport.js';

describe('task 7 - Airport', () => {
  it('should create an Airport with correct name and code', () => {
    const airport = new Airport('San Francisco Airport', 'SFO');
    expect(airport.name).toBe('San Francisco Airport');
    expect(airport.code).toBe('SFO');
  });

  it('toString should return formatted string', () => {
    const airport = new Airport('Charles de Gaulle', 'CDG');
    expect(airport.toString()).toBe('[object CDG]');
  });

  it('should throw error if name is not a string', () => {
    expect(() => new Airport(123, 'CDG')).toThrow(TypeError);
  });

  it('should throw error if code is not a string', () => {
    expect(() => new Airport('Paris', 456)).toThrow(TypeError);
  });
});
