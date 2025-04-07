import getStudentIdsSum from '../3-get_ids_sum.js';
import getListStudents from '../0-get_list_students.js';

describe('getStudentIdsSum', () => {
	test('returns correct sum of ids', () => {
		const students = getListStudents();
		expect(getStudentIdsSum(students)).toBe(8);
	});

	test('returns 0 if input is not an array', () => {
		expect(getStudentIdsSum('invalid')).toBe(0);
		expect(getStudentIdsSum(null)).toBe(0);
	});
});