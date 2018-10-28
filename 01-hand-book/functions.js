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
// function buildName(firstName: string, lastName: string) {
//   return firstName + " " + lastName;
// }
// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");         // ah, just right
// function buildName(firstName: string, lastName?: string) {
//   if (lastName)
//     return firstName + " " + lastName;
//   else
//     return firstName;
// }
// let result1 = buildName("Bob");  // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");  // ah, just right
// function buildName(firstName: string, lastName = "Smith") {
//   return firstName + " " + lastName;
// }
// let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
// let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result4 = buildName("Bob", "Adams");         // ah, just right
/**
 * 剩余参数
 */
// function buildName(firstName: string, ...restOfName: string[]) {
//   return firstName + " " + restOfName.join(" ");
// }
// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
/**
 * 重载
 */
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
