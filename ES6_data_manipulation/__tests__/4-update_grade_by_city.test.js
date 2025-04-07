import getListStudents from '../0-get_list_students.js';
import updateStudentGradeByCity from '../4-update_grade_by_city.js';

describe('updateStudentGradeByCity', () => {
	test('updates grades correctly for students in a city', () => {
		const result = updateStudentGradeByCity(
			getListStudents(),
			'San Francisco',
			[{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]
		);

		expect(result).toEqual([
			{ id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 86 },
			{ id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 },
		]);
	});

	test('adds "N/A" when student has no grade', () => {
		const result = updateStudentGradeByCity(
			getListStudents(),
			'San Francisco',
			[{ studentId: 5, grade: 97 }]
		);

		expect(result).toEqual([
			{ id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 'N/A' },
			{ id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 },
		]);
	});

	test('returns empty array if input is invalid', () => {
		expect(updateStudentGradeByCity(null, 'San Francisco', [])).toEqual([]);
	});
});