// main.ts

interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional
  location: string;
  [key: string]: any; // This allows adding additional properties
}

// Create an instance of the Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Additional property
};

console.log(teacher3);

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Required property
}

// Example of creating a Directors object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string; // Function signature
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage of the printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe
