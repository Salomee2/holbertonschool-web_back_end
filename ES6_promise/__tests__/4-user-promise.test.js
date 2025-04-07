import signUpUser from '../4-user-promise.js';

describe('signUpUser', () => {
	test('resolves with correct user object', async () => {
		await expect(signUpUser('Bob', 'Dylan')).resolves.toEqual({
			firstName: 'Bob',
			lastName: 'Dylan',
		});
	});
});
