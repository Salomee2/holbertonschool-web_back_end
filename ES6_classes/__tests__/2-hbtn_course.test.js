import HolbertonCourse from '../2-hbtn_course.js';

describe('task 2 - HolbertonCourse', () => {
  it('should create a course with correct properties', () => {
    const course = new HolbertonCourse('ES6', 1, ['Salomée', 'Bob']);
    expect(course.name).toBe('ES6');
    expect(course).toHaveLength(1);
    expect(course.students).toStrictEqual(['Salomée', 'Bob']);
  });

  it('should update name using setter', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob']);
    course.name = 'Python';
    expect(course.name).toBe('Python');
  });

  it('should throw TypeError on invalid name', () => {
    expect(() => new HolbertonCourse(123, 1, ['Bob'])).toThrow(TypeError);
  });

  it('should throw TypeError on invalid length', () => {
    expect(() => new HolbertonCourse('ES6', '1', ['Bob'])).toThrow(TypeError);
  });

  it('should throw TypeError on invalid students array', () => {
    expect(() => new HolbertonCourse('ES6', 1, 'not-an-array')).toThrow(TypeError);
  });
});
