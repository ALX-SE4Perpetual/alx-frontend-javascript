export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const studentByCity = students.filter((student) => student.location === city);

  return studentByCity.map((student) => {
    const grade = newGrades.find((grade) => student.id === grade.studentId);

    return { ...student, grade: grade ? grade.grade : 'N/A' };
  });
}
