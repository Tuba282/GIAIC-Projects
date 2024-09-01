// let's Start with enums

enum Directions {
  Up,
  Down,
  Left,
  Right,
}
console.log(Directions.Up); //0(Call as Object Wise)
console.log(Directions[3]); //Right (Call as index wise)

// enums with values

enum direction {
  Up = "upword",
  Down = "downword",
  Left = "leftside",
  Right = "rightside",
}
console.log(direction.Down); //downword
// console.log(direction[2]);//Not OK error

// Rest parameters

function parse(currency: number, ...others: string[]): string {
  return `In my mother's parse  you will find ${currency} rupee note but she carries ${others} also with her.`;
}

console.log(parse(100, "CNIC and", "ATM card", "Some toffies"));

// optional parameters

interface deliery {
  time: string;
  place: string;
  day?: string;
}
let deivery: deliery = {
  time: "10 AM",
  place: "M.A Jinaah Road",
};
let Deivery: deliery = {
  time: "10 AM",
  place: "M.A Jinaah Road",
  day: "Today",
};

let delivery_info = (info: deliery) => {
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
const place = (city: string, country: string = "Pakistan"): string => {
  return `${city} is the capital of ${country}`;
};
console.log(place("Tokyo", "Japan"));
console.log(place("Beijing", "China"));
console.log(place("Islamabad", undefined));

// using map and filter

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2: unknown = arr1.map((e) => e * 2);
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
let age: string | number;
// age = 20;
age = "twenty";
if (typeof age === "string") {
  console.log(age.toLocaleUpperCase());
} else {
  console.log(age);
}

// concept of type unknown and any

let value1: unknown;
value1 = 10;
value1 = true;
value1 = "ali";
value1 = () => 200;
value1 = [];
value1 = {};
value1 = null;
value1 = undefined;

let value2: any;
value2 = 10;
value2 = true;
value2 = "ali";
value2 = () => 200;
value2 = [];
value2 = {};
value2 = null;
value2 = undefined;

// Compatiblity checking

let my_value: unknown;
let my_value_1: unknown = my_value;
// unknown is compatible with type unknwon

let her_value: unknown;
let her_value1: any = her_value;
// unknown is compatible with type any

let his_value: unknown = "ali";
// let his_value1: string = his_value;
// unknown is not  compatible with type string/number/boolean/....

