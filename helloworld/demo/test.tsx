let isDone: boolean = false;
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

let name: string = "bob";
name = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${name}.

I'll be ${ age + 1} years old next month.`;
let sentence1: string = "Hello, my name is " + name + ".\n\n" +
  "I'll be " + (age + 1) + " years old next month.";

let list: number[] = [1, 2, 3];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

// x[6] = true; // Error, 布尔不是(string | number)类型

enum Color { Red, Green, Blue }
let c: Color = Color.Blue;

enum Color1 { Red = 1, Green, Blue }
let colorName: string = Color1[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

let list1: any[] = [1, true, "free"];

list1[1] = 100;

function warnUser(): void {
  console.log("This is my warning message");
}

let u: undefined = undefined;
let n: null = null;

interface Student {
  name: string;
  age: number;
}

function godStudent(student: Student) {
  console.log(student.age + ', ' + student.name);
}

let student = {name: 'joson', age: 16};
godStudent(student);

class Student {
  age: number;
  name: string;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  toString() {
    return this.name + ', ' + this.age;
  }
}

let student1 = new Student('joson', 17);

class Animal1 {
  move(distance: number = 0) {
    console.log('move ' + distance);
  }
}

class Dog extends Animal1 {
  bark() {
    console.log('wwwwwwwwww');
  }
}

let dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

class Animal {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

let passcode = "secret passcode";

class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    }
    else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  alert(employee.fullName);
}

class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number; }) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

abstract class Animal2 {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming the earch...');
  }
}



