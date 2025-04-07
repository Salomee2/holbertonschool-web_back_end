import getStudentsByLocation from '../2-get_students_by_loc.js';
import getListStudents from '../0-get_list_students.js';

describe('getStudentsByLocation', () => {
	test('filters students by location correctly', () => {
		const students = getListStudents();
		const result = getStudentsByLocation(students, 'San Francisco');
		expect(result).toEqual([
			{ id: 1, firstName: 'Guillaume', location: 'San Francisco' },
			{ id: 5, firstName: 'Serena', location: 'San Francisco' },
		]);
	});

	test('returns empty array if no match', () => {
		const students = getListStudents();
		expect(getStudentsByLocation(students, 'Paris')).toEqual([]);
	});

	test('returns empty array if input is not an array', () => {
		expect(getStudentsByLocation(null, 'San Francisco')).toEqual([]);
	});
});