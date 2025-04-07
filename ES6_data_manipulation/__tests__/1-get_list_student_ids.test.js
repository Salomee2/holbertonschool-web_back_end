import getListStudentIds from '../1-get_list_student_ids.js';
import getListStudents from '../0-get_list_students.js';

describe('getListStudentIds', () => {
	test('returns empty array if input is not an array', () => {
		expect(getListStudentIds('hello')).toEqual([]);
		expect(getListStudentIds(null)).toEqual([]);
		expect(getListStudentIds(123)).toEqual([]);
	});

	test('returns array of ids if valid input', () => {
		const students = getListStudents();
		expect(getListStudentIds(students)).toEqual([1, 2, 5]);
	});
});