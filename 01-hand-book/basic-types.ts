export {}

/**
 * boolean
 */
let isDone: boolean = false;

/**
 * number
 */
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

/**
 * string
 */
let name: string = "bob";
name = "smith";

let name1: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${name1}.

I'll be ${ age + 1} years old next month.`;

/**
 * list
 */
let list: number[] = [1, 2, 3];

let list1: Array<number> = [1, 2, 3];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error

console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型

/**
 * enum
 */
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

/**
 * any
 */
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

/**
 *void
 */
function warnUser(): void {
  console.log("This is my warning message");
}

let unusable: void = undefined;

/**
 * null 和 undefined
 */
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

/**
 * never
 */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}


/**
 * 
 * object
 */
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error

/**
 * 类型断言
 */
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length; // TypeScript里使用JSX 不支持

let someValue: any = "this is a string";

let strLength: number = (someValue as string).length; // TypeScript里使用JSX支持