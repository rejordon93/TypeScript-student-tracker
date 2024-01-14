"use strict";
// // class Player {
// //   constructor(
// //     public first: string,
// //     public last: string,
// //     protected _score: number
// //   ) {}
// //   private secretMethod(): void {
// //     console.log("SECRET METHOD!!");
// //   }
// //   get fullName(): string {
// //     return `${this.first} ${this.last}`;
// //   }
// //   get score(): number {
// //     return this._score;
// //   }
// //   set score(newScore: number) {
// //     if (newScore < 0) {
// //       throw new Error("Score canot be negative!");
// //     }
// //     this._score = newScore;
// //   }
// // }
// Define a generic class for a StudentTracker
class StudentTracker {
    constructor() {
        this.students = [];
    }
    // Method to add a student
    addStudent(student) {
        this.students.push(student);
    }
    // Method to get all students
    getAllStudents() {
        return this.students;
    }
    // Method to get a student by ID
    getStudentById(id) {
        return this.students.find((student) => student.id === id);
    }
    // Method to display all students
    displayAllStudents() {
        console.log("All Students:");
        this.students.forEach((student) => {
            console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
        });
    }
}
// Create an instance of StudentTracker for specific student type
const studentTracker = new StudentTracker();
// Add students
studentTracker.addStudent({ id: 1, name: "John", age: 20, grade: "A" });
studentTracker.addStudent({ id: 2, name: "Jane", age: 22, grade: "B" });
studentTracker.addStudent({ id: 3, name: "Bob", age: 21, grade: "C" });
// Display all students
studentTracker.displayAllStudents();
// Get a student by ID
const studentById = studentTracker.getStudentById(2);
if (studentById) {
    console.log("Student found by ID:", studentById);
}
else {
    console.log("Student not found");
}
