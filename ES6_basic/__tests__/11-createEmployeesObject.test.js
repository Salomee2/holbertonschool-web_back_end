import createEmployeesObject from '../11-createEmployeesObject';

describe('Task 11 - createEmployeesObject', () => {
	test('Returns an object with department as key and employees as value', () => {
		expect.assertions(1);
		const result = createEmployeesObject('Software', ['Bob', 'Sylvie']);
		expect(result).toEqual({
			Software: ['Bob', 'Sylvie'],
		});
	});
});
