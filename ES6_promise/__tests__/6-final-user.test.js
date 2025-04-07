import handleProfileSignup from '../6-final-user.js';

describe('handleProfileSignup', () => {
	test('should return results of all promises regardless of outcome', async () => {
		const results = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');

		expect(results).toHaveLength(2);
		expect(results[0].status).toBe('rejected');
		expect(results[0].reason).toEqual(new Error('bob_dylan.jpg cannot be processed'));

		expect(results[1].status).toBe('fulfilled');
		expect(results[1].value).toEqual({ firstName: 'Bob', lastName: 'Dylan' });
	});
});
