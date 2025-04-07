import loadBalancer from '../7-load_balancer.js';

describe('loadBalancer', () => {
	test('returns the value of the fastest resolved promise', async () => {
		const p1 = new Promise((resolve) => setTimeout(resolve, 100, 'first'));
		const p2 = new Promise((resolve) => setTimeout(resolve, 300, 'second'));

		const result = await loadBalancer(p1, p2);
		expect(result).toBe('first');
	});
});
