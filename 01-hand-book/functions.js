"use strict";
exports.__esModule = true;
/**
 * 为函数定义类型
 */
// function add(x: number, y: number): number {
//   return x + y;
// }
// let myAdd = function (x: number, y: number): number { return x + y; };
// let myAdd: (x: number, y: number) => number =
//   function (x: number, y: number): number { return x + y; };
/**
 * 推断类型
 */
// myAdd has the full function type
// let myAdd = function (x: number, y: number): number { return x + y; };
// // The parameters `x` and `y` have the type number
// let myAdd: (baseValue: number, increment: number) => number =
//   function (x, y) { return x + y; };
/**
 * 可选参数和默认参数
 */
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
var result1 = buildName("Bob"); // error, too few parameters
var result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right
