import appendToEachArrayValue from '../10-loops';

describe('Task 10 - For...of loop', () => {
	test('Prepends string to each array item', () => {
		expect.assertions(1);
		const input = ['appended', 'fixed', 'displayed'];
		const result = appendToEachArrayValue(input, 'correctly-');
		expect(result).toEqual([
			'correctly-appended',
			'correctly-fixed',
			'correctly-displayed'
		]);
	});
});
