import handleProfileSignup from '../6-final-user.js';

describe('handleProfileSignup', () => {
	test('returns correct structure with rejected and fulfilled results', async () => {
		const result = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');

		expect(result).toEqual([
			{
				status: 'rejected',
				value: 'Error: bob_dylan.jpg cannot be processed',
			},
			{
				status: 'fulfilled',
				value: {
					firstName: 'Bob',
					lastName: 'Dylan',
				},
			},
		]);
	});
});
