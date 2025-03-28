import SkyHighBuilding from '../6-sky_high.js';

describe('task 6 - SkyHighBuilding', () => {
  it('should create a SkyHighBuilding with correct sqft and floors', () => {
    const sky = new SkyHighBuilding(140, 60);
    expect(sky.sqft).toBe(140);
    expect(sky.floors).toBe(60);
  });

  it('should return correct evacuation message', () => {
    const sky = new SkyHighBuilding(100, 3);
    expect(sky.evacuationWarningMessage()).toBe('Evacuate slowly the 3 floors');
  });

  it('should throw error if floors is not a number', () => {
    expect(() => new SkyHighBuilding(200, 'many')).toThrow(TypeError);
  });
});
