import initializeRooms from '../1-make_classrooms.js';
import ClassRoom from '../0-classroom.js';

describe('task 1 - initializeRooms', () => {
  it('should return an array of 3 ClassRoom instances', () => {
    const rooms = initializeRooms();

    expect(rooms).toHaveLength(3);
    expect(rooms[0]).toBeInstanceOf(ClassRoom);
    expect(rooms[1]).toBeInstanceOf(ClassRoom);
    expect(rooms[2]).toBeInstanceOf(ClassRoom);

    expect(rooms[0]._maxStudentsSize).toBe(19);
    expect(rooms[1]._maxStudentsSize).toBe(20);
    expect(rooms[2]._maxStudentsSize).toBe(34);
  });
});
