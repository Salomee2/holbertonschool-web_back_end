import listOfStudents from '../9-hoisting.js';

describe('task 9 - Hoisting fix', () => {
  it('should export a list of 5 students', () => {
    expect(listOfStudents).toHaveLength(5);
  });

  it('should contain correct fullStudentDescription strings', () => {
    const descs = listOfStudents.map((student) => student.fullStudentDescription);
    expect(descs).toContain('Guillaume Salva - 2020 - San Francisco');
    expect(descs).toContain('Jason Sandler - 2019 - San Francisco');
  });
});
