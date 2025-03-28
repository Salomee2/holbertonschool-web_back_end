import Car from '../10-car.js';

class TestCar extends Car {}

describe('task 10 - Car clone', () => {
  it('should create a car with correct attributes', () => {
    const car = new Car('Toyota', 'Hybrid', 'Blue');
    expect(car._brand).toBe('Toyota');
    expect(car._motor).toBe('Hybrid');
    expect(car._color).toBe('Blue');
  });

  it('should clone a car with undefined attributes', () => {
    const tc1 = new TestCar('Nissan', 'Turbo', 'Pink');
    const tc2 = tc1.cloneCar();

    expect(tc2).toBeInstanceOf(TestCar);
    expect(tc2._brand).toBeUndefined();
    expect(tc2._motor).toBeUndefined();
    expect(tc2._color).toBeUndefined();
    expect(tc1).not.toBe(tc2); // Ce ne sont pas les mêmes objets
  });
});
