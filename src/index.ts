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

// // class SuperPlayer extends Player {
// //   public isAdmin: boolean = true;
// //   maxScore() {
// //     this._score = 1000;
// //   }
// // }

// // const Ethan = new Player("Ethan", "Jordon", 9);
// // Ethan.score = 99;

// type Colorful = {
//   color: string;
// };

// type Printable = {
//   print(): void;
// };

// class Car implements Colorful {
//   constructor(public color: string) {}
// }

// class Jacket implements Colorful, Printable {
//   constructor(public brand: string, public color: string) {}
//   print(): void {
//     console.log(`${this.color} ${this.brand}`);
//   }
// }

// // const car1 = new Car("red");
// // const jacket1 = new Jacket("Prada", "blue");
// // console.log(car1);
// // console.log(jacket1);

// abstract class Employee {
//   constructor(public first: string, public last: string) {}
//   abstract getPay(): number;
//   greet() {
//     console.log("Hello");
//   }
// }

// class FullTimeEmployee extends Employee {
//   constructor(first: string, last: string, private salary: number) {
//     super(first, last);
//   }
//   getPay(): number {
//     return this.salary;
//   }
// }

// class PartTime extends Employee {
//   constructor(
//     first: string,
//     last: string,
//     private hourlyRate: number,
//     private hourlsWorked: number
//   ) {
//     super(first, last);
//   }
//   getPay(): number {
//     return this.hourlyRate * this.hourlsWorked;
//   }
// }

// const Ethan = new FullTimeEmployee("Ethan", "Jordon", 10000);
// const Bob = new PartTime("Bill", "Smith", 23, 40);

//Project Idea: Simple Calculator
// class Calculator {
//   private result: number;

//   constructor() {
//     this.result = 0;
//   }

//   add(num1: number, num2: number): void {
//     this.result = num1 + num2;
//   }

//   subtract(num1: number, num2: number): void {
//     this.result = num1 - num2;
//   }

//   multiply(num1: number, num2: number): void {
//     this.result = num1 * num2;
//   }

//   divide(num1: number, num2: number): void {
//     if (num2 !== 0) {
//       this.result = num1 / num2;
//     } else {
//       console.error("Cannot divide by zero.");
//     }
//   }

//   getResult(): number {
//     return this.result;
//   }
// }

// const calculator = new Calculator();

// calculator.add(5, 3);
// const result1 = calculator.getResult();
// console.log(`Addition: ${result1}`);Frankfurt

// calculator.subtract(8, 4);
// const result2 = calculator.getResult();
// console.log(`Subtraction: ${result2}`);

// calculator.multiply(2, 6);
// const result3 = calculator.getResult();
// console.log(`Multiplication: ${result3}`);

// calculator.divide(10, 2);
// const result4 = calculator.getResult();
// console.log(`Division: ${result4}`);

// type Person = {
//   name: string;
//   age: number;
//   isWorking: boolean;
//   startWorking(): void;
// };

// type HasKids = {
//   kid: boolean | number;
// };

// class Employee implements Person, HasKids {
//   constructor(
//     public name: string,
//     public age: number,
//     public isWorking: boolean,
//     public kid: boolean | number
//   ) {}

//   startWorking(): void {
//     if (
//       this.isWorking === true &&
//       (typeof this.kid === "number" ? this.kid > 18 : false)
//     ) {
//       console.log(`${this.name} has started working. Age is ${this.kid}`);
//     } else {
//       console.log(`${this.name} has stopped working.`);
//     }
//   }
// }

// const employee = new Employee("Ethan", 30, true, 34);
// employee.startWorking();
// console.log(employee);

// class StringBuilder {
//   private value: string = "";

//   append(text: string): StringBuilder {
//     this.value += text;
//     return this; // Enable method chaining
//   }

//   toString(): string {
//     return this.value;
//   }
// }

// const builder = new StringBuilder();
// const finalResult = builder
//   .append("Hello")
//   .append(" ")
//   .append("World")
//   .toString();
// console.log(finalResult); // Output: Hello World

// type FOOD = {
//   name: string;
// };

// class myClass {
//   myMethod(): void {
//     console.log("Executing myMethod");
//   }
// }
// class Food implements FOOD {
//   constructor(public name: string) {}
// }

// const myInstance = new myClass();
// myInstance.myMethod();
// const myFood = new Food("Tacos");
// console.log(myFood.name);

// class BankAccount {
//   private balance: number = 0;

//   deposit(amount: number): void {
//     this.balance += amount;
//   }

//   withdraw(amount: number): void {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//     } else {
//       console.log("Insufficient funds");
//     }
//   }
// }

// const account = new BankAccount();
// account.deposit(-2); // Accessible
// console.log(account.balance); // Error: Property 'balance' is private

// class Animal {
//   protected sound: string = "";

//   makeSound(): void {
//     console.log(this.sound);
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     super();
//     this.sound = "Woof!";
//   }
// }
// const myDog = new Dog();
// myDog.makeSound();
// console.log(myDog);

/////////////////////////////////////////////////////////////Generics
// function getFirstElement<T>(array: T[]) {
//   return array[0];
// }

// const numbers = [1, 2, 3];
// const firstNum = getFirstElement(numbers);

// const string = ["sdf", "dsd"];
// const firstString = getFirstElement(string);

// type ApiResponse<T extends object = {status: number}> = {
//   data: T;
//   usErrir: boolean;
// };

// const response: ApiResponse<{}> = {
//   data: {
//     name: "Ethan",
//     status: 200
// }
//   isError: false,
// };

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
