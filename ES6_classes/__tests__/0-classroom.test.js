import ClassRoom from '../0-classroom.js';

describe('task 0 - ClassRoom', () => {
  it('should set _maxStudentsSize correctly', () => {
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });
});
