// 4-update_grade_by_city.js
const updateStudentGradeByCity = (students, city, newGrades) => {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  return students
    .filter(student => student.location === city) // Filtrer les étudiants par ville
    .map(student => {
      const gradeEntry = newGrades.find(grade => grade.studentId === student.id); // Trouver la note correspondante
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: gradeEntry ? gradeEntry.grade : 'N/A' // Affecter la note ou 'N/A'
      };
    });
};

export default updateStudentGradeByCity;
