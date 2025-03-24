import { taskFirst, taskNext } from '../0-constants.js';

describe('Task 0 - Const or let', () => {
	test('taskFirst returns the expected string', () => {
		expect(taskFirst()).toBe('I prefer const when I can.');
	});

	test('taskNext returns the expected string', () => {
		expect(taskNext()).toBe('But sometimes let is okay');
	});
});
