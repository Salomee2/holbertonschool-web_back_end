import createReportObject from '../12-createReportObject';

describe('Task 12 - createReportObject', () => {
	test('Returns an object with allEmployees and getNumberOfDepartments()', () => {
		expect.assertions(2);

		const employeesList = {
			engineer: ['Alice', 'Bob'],
			marketing: ['Sylvie'],
			design: ['Tom']
		};

		const report = createReportObject(employeesList);

		// Test de la clé allEmployees
		expect(report.allEmployees).toEqual({
			engineer: ['Alice', 'Bob'],
			marketing: ['Sylvie'],
			design: ['Tom']
		});

		// Test de la méthode
		expect(report.getNumberOfDepartments()).toBe(3);
	});
});
