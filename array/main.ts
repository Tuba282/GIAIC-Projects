// // Loop





// console.log(`For Loop`);
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// console.log(`While Loop`);
// let num = 1;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// console.log(`Do-while Loop`);
// let nam = 1;
// do {
//   console.log(nam);
//   nam++;
// } while (nam <= 10);






// module

// export  function cal(a: number, b: number) {
//   const add = a + b;
//   const subtract = a - b;
//   const multiply = a * b;
//   const divide = a / b;
//   return [add, subtract, multiply, divide];
// }
// export  function simple_cal(a: number, b: number) {
//   const add = a + b;
//   const subtract = a - b;
//   const multiply = a * b;
//   const divide = a / b;
//   return [add, subtract, multiply, divide];
// }
// const [add, subtract, multiply, divide] = cal(6, 5);





// enum



// enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;//index 1
// console.log(c);

// enum Color1 {Red = 1, Green, Blue};
// var colorName = Color1[2];
// console.log(colorName);

// enum Color2 {Red , Green , Blue};//can assign values to all
// var colorIndex1 = Color2["Green"];
// var colorIndex2 = Color2[2];
// var colorIndex3 = Color2.Green
// console.log(colorIndex1);
// console.log(colorIndex2);
// console.log(colorIndex3);




// const enum

// const enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;
// console.log(c);


// const enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color[2]; //Not allowe+d with const enums
// console.log(colorName);

// const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);

let array: string []
let arr: Array<string>