export {};

/**
 * 接口初探
 */
// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);



// interface LabelledValue {
//   label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);


/**
 * 可选属性
 */
// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({ color: "black" });



/**
 * 只读属性
 */
/**
 *readonly vs const
  最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。
  做为变量使用的话用 const，若做为属性则使用readonly。
 */
// interface Point {
//   readonly x: number;
//   readonly y: number;
// }

// let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!


/**
 *额外的属性检查
 */
// interface SquareConfig {
//   color?: string;
//   width?: number;
// }
// // interface SquareConfig {
// //   color?: string;
// //   width?: number;
// //   [propName: string]: any;
// // }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   return { color: "white", area: 100 };
// }

// let mySquare = createSquare({ colour: "red", width: 100 });
// // let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);


/**
 *函数类型
 */
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }

/**
 * 实现接口
 */
// interface ClockInterface {
//   currentTime: Date;

//   setTime(d: Date);
// }

// class Clock implements ClockInterface {
//   currentTime: Date;
//   setTime(d: Date) {
//     this.currentTime = d;
//   }
//   constructor(h: number, m: number) { }
// }


/**
 * 类静态部分与实例部分的区别
 */
// interface ClockConstructor {
//   new(hour: number, minute: number);
// }

// class Clock implements ClockConstructor {
//   currentTime: Date;
//   constructor(h: number, m: number) { }
// }


/**
 * 继承接口
 */
// interface Shape {
//   color: string;
// }

// interface Square extends Shape {
//   sideLength: number;
// }

// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;


/**
 * 多继承接口
 */
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;