/*
File Name: AdvancedDataProcessing.js
Description: This code demonstrates advanced data processing techniques using JavaScript.
*/

// Define a class to represent a Student
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I'm a student!`;
  }
}

// Create an array of students
const students = [
  new Student("Alice", 18, "12th"),
  new Student("Bob", 17, "11th"),
  new Student("Charlie", 16, "10th"),
  new Student("Dave", 15, "9th"),
  new Student("Eve", 16, "10th"),
];

// Calculate the average age of all students
const averageAge = students.reduce((total, student) => total + student.age, 0) / students.length;
console.log(`Average Age: ${averageAge}`);

// Group students based on their grades
const studentsByGrade = students.reduce((acc, student) => {
  if (!acc[student.grade]) {
    acc[student.grade] = [];
  }
  acc[student.grade].push(student);
  return acc;
}, {});
console.log("Students Grouped by Grade:");
console.log(studentsByGrade);

// Find the oldest student
const oldestStudent = students.reduce((oldest, student) => {
  if (!oldest || student.age > oldest.age) {
    return student;
  }
  return oldest;
}, null);
console.log(`Oldest Student: ${oldestStudent.name}`);

// Sort students in descending order of age
const sortedStudents = students.sort((a, b) => b.age - a.age);
console.log("Students Sorted by Age:");
console.log(sortedStudents);

// Generate a report of students
const studentReport = students.map((student, index) => {
  return `Student ${index + 1} - Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`;
});
console.log("Student Report:");
console.log(studentReport);

// Calculate the sum of ages of students in 10th grade
const sumOfAges = students
  .filter((student) => student.grade === "10th")
  .reduce((total, student) => total + student.age, 0);
console.log(`Sum of Ages of Students in 10th Grade: ${sumOfAges}`);

// Calculate the average age of students in 12th grade
const averageAge12thGrade = students
  .filter((student) => student.grade === "12th")
  .reduce((total, student) => total + student.age, 0) / studentsByGrade["12th"].length;
console.log(`Average Age of Students in 12th Grade: ${averageAge12thGrade}`);

// Print a greeting message from each student
students.forEach((student) => console.log(student.getGreeting()));

// Perform some asynchronous data processing
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Asynchronous data fetched successfully!");
    }, 2000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));