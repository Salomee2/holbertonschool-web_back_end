import handleResponseFromAPI from '../2-then.js';

describe('handleResponseFromAPI', () => {
	test('should resolve to correct object', async () => {
		const result = await handleResponseFromAPI(Promise.resolve());
		expect(result).toEqual({ status: 200, body: 'success' });
	});

	test('should reject to an Error object', async () => {
		const result = await handleResponseFromAPI(Promise.reject());
		expect(result).toBeInstanceOf(Error);
	});
});
