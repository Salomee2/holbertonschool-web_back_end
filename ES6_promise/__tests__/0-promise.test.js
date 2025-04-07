import getResponseFromAPI from '../0-promise.js';

describe('getResponseFromAPI', () => {
	test('should return a Promise', () => {
		const response = getResponseFromAPI();
		expect(response instanceof Promise).toBe(true);
	});
});