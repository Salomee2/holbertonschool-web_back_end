import HolbertonCourse from '../2-hbtn_course.js';

describe('Task 2 - HolbertonCourse', () => {
	test('should create a course with correct properties', () => {
		const course = new HolbertonCourse('ES6', 1, ['Salomée', 'Bob']);
		expect(course.name).toBe('ES6');
		expect(course.length).toBe(1);
		expect(course.students).toEqual(['Salomée', 'Bob']);
	});

	test('should update name using setter', () => {
		const course = new HolbertonCourse('ES6', 1, ['Bob']);
		course.name = 'Python';
		expect(course.name).toBe('Python');
	});

	test('should throw TypeError on invalid name', () => {
		expect(() => new HolbertonCourse(123, 1, ['Bob'])).toThrow(TypeError);
	});

	test('should throw TypeError on invalid length', () => {
		expect(() => new HolbertonCourse('ES6', '1', ['Bob'])).toThrow(TypeError);
	});

	test('should throw TypeError on invalid students array', () => {
		expect(() => new HolbertonCourse('ES6', 1, 'not-an-array')).toThrow(TypeError);
	});
});