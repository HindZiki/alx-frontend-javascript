// 1-main.js
import getListStudentIds from './1-get_list_student_ids.js';
import getListStudents from './0-get_list_students.js';

console.log(getListStudentIds("hello")); // Devrait afficher []
console.log(getListStudentIds(getListStudents())); // Devrait afficher [1, 2, 5]
