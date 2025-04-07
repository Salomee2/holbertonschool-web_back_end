import getFullResponseFromAPI from '../1-promise.js';

describe('getFullResponseFromAPI', () => {
	test('resolves when success is true', async () => {
		await expect(getFullResponseFromAPI(true)).resolves.toEqual({
			status: 200,
			body: 'Success',
		});
	});

	test('rejects when success is false', async () => {
		await expect(getFullResponseFromAPI(false)).rejects.toThrow('The fake API is not working currently');
	});
});