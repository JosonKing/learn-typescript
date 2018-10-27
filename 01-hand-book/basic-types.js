"use strict";
exports.__esModule = true;
/**
 * boolean
 */
var isDone = false;
/**
 * number
 */
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
/**
 * string
 */
var name = "bob";
name = "smith";
var name1 = "Gene";
var age = 37;
var sentence = "Hello, my name is " + name1 + ".\n\nI'll be " + (age + 1) + " years old next month.";
/**
 * list
 */
var list = [1, 2, 3];
var list1 = [1, 2, 3];
// Declare a tuple type
var x;
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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
/**
 * any
 */
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
/**
 *void
 */
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
/**
 * null 和 undefined
 */
// Not much else we can assign to these variables!
var u = undefined;
var n = null;
/**
 * never
 */
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 }); // OK
create(null); // OK
create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
/**
 * 类型断言
 */
var someValue = "this is a string";
var strLength = someValue.length; // TypeScript里使用JSX 不支持
var someValue = "this is a string";
var strLength = someValue.length; // TypeScript里使用JSX支持
