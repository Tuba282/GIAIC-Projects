"use strict";
// let's Start with enums
Object.defineProperty(exports, "__esModule", { value: true });
var Directions;
(function (Directions) {
  Directions[(Directions["Up"] = 0)] = "Up";
  Directions[(Directions["Down"] = 1)] = "Down";
  Directions[(Directions["Left"] = 2)] = "Left";
  Directions[(Directions["Right"] = 3)] = "Right";
})(Directions || (Directions = {}));
console.log(Directions.Up); //0(Call as Object Wise)
console.log(Directions[3]); //Right (Call as index wise)
// enums with values
var direction;
(function (direction) {
  direction["Up"] = "upword";
  direction["Down"] = "downword";
  direction["Left"] = "leftside";
  direction["Right"] = "rightside";
})(direction || (direction = {}));
console.log(direction.Down); //downword
// console.log(direction[2]);//Not OK error
// Rest parameters
function parse(currency, ...others) {
  return `In my mother's parse  you will find ${currency} rupee note but she carries ${others} also with her.`;
}
console.log(parse(100, "CNIC and", "ATM card", "Some toffies"));
let deivery = {
  time: "10 AM",
  place: "M.A Jinaah Road",
};
let Deivery = {
  time: "10 AM",
  place: "M.A Jinaah Road",
  day: "Today",
};
let delivery_info = (info) => {
  if (info.day) {
    console.log(
      `The delivery will be on ${info.day} at ${info.time} at ${info.place}`
    );
  } else {
    console.log(`The delivery will be at ${info.time} at ${info.place}`);
  }
};
delivery_info(deivery); //console.log(`The delivery will be at Today at M.A Jinnah Road  `);
delivery_info(Deivery); //The delivery will be on Today at 10 AM at M.A Jinnah Road
// default parameters
const place = (city, country = "Pakistan") => {
  return `${city} is the capital of ${country}`;
};
console.log(place("Tokyo", "Japan"));
console.log(place("Beijing", "China"));
console.log(place("Islamabad", undefined));
// using map and filter
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = arr1.map((e) => e * 2);
console.log(arr2); //it will multiply all arr1 elemts by 2
arr2 = arr1.filter((x) => x % 2 == 0);
console.log(arr2); //it will give all even numbers of arr1
arr2 = arr1.reduce((x, y) => x + y);
console.log(arr2); //it will add all the array elements
// usage of join() and toLocalString()
let array = [`ali`, `akram`, `sana`];
console.log(array.toLocaleString());
console.log(array.toString());
console.log(array.join(" and "));
// concept of Narrowing
