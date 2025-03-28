import Building from '../5-building.js';

describe('task 5 - Building', () => {
  it('should create a Building with correct sqft', () => {
    const b = new Building(100);
    expect(b.sqft).toBe(100);
    expect(b instanceof Building).toBe(true);
  });

  it('should throw error if sqft is not a number', () => {
    expect(() => new Building('notANumber')).toThrow(TypeError);
  });

  it('should allow subclass with evacuationWarningMessage', () => {
    class House extends Building {
      evacuationWarningMessage() {
        return 'Evacuate calmly';
      }
    }

    const h = new House(200);
    expect(h.sqft).toBe(200);
    expect(h.evacuationWarningMessage()).toBe('Evacuate calmly');
  });

  it('should throw error if subclass does not override evacuationWarningMessage', () => {
    class Office extends Building {}

    expect(() => new Office(300)).toThrow('Class extending Building must override evacuationWarningMessage');
  });
});
