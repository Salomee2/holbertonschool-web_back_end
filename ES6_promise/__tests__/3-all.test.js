import handleProfileSignup from '../3-all.js';

jest.mock('../utils', () => ({
	uploadPhoto: () => Promise.resolve({ status: 200, body: 'photo-profile-1' }),
	createUser: () => Promise.resolve({ firstName: 'Guillaume', lastName: 'Salva' }),
}));

describe('handleProfileSignup', () => {
	it('should log photo and user info on success', async () => {
		console.log = jest.fn();
		await handleProfileSignup();
		expect(console.log).toHaveBeenCalledWith('photo-profile-1 Guillaume Salva');
	});
});