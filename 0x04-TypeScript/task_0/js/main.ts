// Interface definition
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Creating two students
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Rendering the table
const table = document.createElement('table');
studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

// Append the table to the body
document.body.appendChild(table);

