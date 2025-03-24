import returnHowManyArguments from '../4-rest-parameter.js';

describe('Task 4 - Rest parameter syntax', () => {
	test('Returns correct number of arguments', () => {
		expect.assertions(2);
		expect(returnHowManyArguments('one')).toBe(1);
		expect(returnHowManyArguments('one', 'two', 3, '4th')).toBe(4);
	});
});
