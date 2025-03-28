import HolbertonClass from '../8-hbtn_class.js';

describe('task 8 - HolbertonClass', () => {
  it('should return correct values for size and location', () => {
    const hc = new HolbertonClass(12, 'Mezzanine');
    expect(hc.size).toBe(12);
    expect(hc.location).toBe('Mezzanine');
  });

  it('should cast to Number correctly', () => {
    const hc = new HolbertonClass(42, 'Basement');
    expect(Number(hc)).toBe(42);
  });

  it('should cast to String correctly', () => {
    const hc = new HolbertonClass(30, 'Rooftop');
    expect(String(hc)).toBe('Rooftop');
  });

  it('should throw error if size is not a number', () => {
    expect(() => new HolbertonClass('12', 'Lobby')).toThrow(TypeError);
  });

  it('should throw error if location is not a string', () => {
    expect(() => new HolbertonClass(12, 999)).toThrow(TypeError);
  });
});
