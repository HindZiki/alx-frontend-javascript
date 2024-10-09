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

// Define the interface for the StudentClass constructor
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Define the StudentClass
class StudentClass {
  firstName: string;
  lastName: string;

  // Constructor accepts firstName and lastName
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method that returns a string
  workOnHomework(): string {
    return "Currently working";
  }

  // Method that returns the first name of the student
  displayName(): string {
    return this.firstName;
  }
}

// Example usage of the StudentClass
const student1 = new StudentClass("Alice", "Johnson");
console.log(student1.displayName()); // Output: Alice
console.log(student1.workOnHomework()); // Output: Currently working
