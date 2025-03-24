import taskBlock from '../1-block-scoped.js';

describe('Task 1 - Block scope', () => {
	test('taskBlock(true) returns [false, true]', () => {
		expect.assertions(1);
		expect(taskBlock(true)).toEqual([false, true]);
	});

	test('taskBlock(false) returns [false, true]', () => {
		expect.assertions(1);
		expect(taskBlock(false)).toEqual([false, true]);
	});
});
