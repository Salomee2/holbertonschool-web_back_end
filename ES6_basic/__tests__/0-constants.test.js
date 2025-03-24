import { taskFirst, taskNext } from '../0-constants.js';

describe('task 0 - Const or let', () => {
  it('taskFirst returns the expected string', () => {
    expect(taskFirst()).toBe('I prefer const when I can.');
  });

  it('taskNext returns the expected string', () => {
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
