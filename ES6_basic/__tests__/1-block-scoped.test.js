import taskBlock from '../1-block-scoped.js';

describe('Task 1 - Block Scope', () => {
	test('Should return [false, true] regardless of trueOrFalse value', () => {
		expect.assertions(2);
		expect(taskBlock(true)).toEqual([false, true]);
		expect(taskBlock(false)).toEqual([false, true]);
	});
});

