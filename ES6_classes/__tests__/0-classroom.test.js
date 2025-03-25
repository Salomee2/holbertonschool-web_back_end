import ClassRoom from '../0-classroom.js';

describe('Task 0 - ClassRoom', () => {
	test('should set _maxStudentsSize correctly', () => {
		const room = new ClassRoom(10);
		expect(room._maxStudentsSize).toBe(10);
	});
});
