

// Define a type for a student
type Student = {
  id: number;
  name: string;
  age: number;
  grade: string;
};

// Define a generic class for a StudentTracker
class StudentTracker<T extends Student> {
  private students: T[] = [];

  // Method to add a student
  addStudent(student: T): void {
    this.students.push(student);
  }

  // Method to get all students
  getAllStudents(): T[] {
    return this.students;
  }

  // Method to get a student by ID
  getStudentById(id: number): T | undefined {
    return this.students.find((student) => student.id === id);
  }

  // Method to display all students
  displayAllStudents(): void {
    console.log("All Students:");
    this.students.forEach((student) => {
      console.log(
        `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`
      );
    });
  }
}

// Create an instance of StudentTracker for specific student type
const studentTracker = new StudentTracker<Student>();

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
} else {
  console.log("Student not found");
}
