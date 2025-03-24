import getNeighborhoodsList from '../2-arrow.js';

describe('Task 2 - Arrow function', () => {
	test('addNeighborhood should add new neighborhood correctly', () => {
		expect.assertions(1);
		const list = new getNeighborhoodsList();
		const result = list.addNeighborhood('Noe Valley');
		expect(result).toEqual(['SOMA', 'Union Square', 'Noe Valley']);
	});
});
