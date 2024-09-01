// class Product {
//   name: string;
//   id: number;
//   constructor(name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   }

//   get_info(): string {
//     return `
//       Product name: ${this.name} \n
//       Product id: ${this.id}\n`;
//   }
// }
// let my_product = new Product(`Tuba Jan`, 282);
// // agr apny return function me lagaya hai to
// console.log(my_product.get_info());

// class Bill extends Product {
//   slip: boolean;
//   constructor(cus_name: string, item_quty: number, s: boolean) {
//     super(cus_name, item_quty);
//     this.slip = s;
//   }
// }
// const bill = new Bill("Ali", 4, true);
// ------------------------------------------class public_acess modifier------------------------------------------------
// class public_acess {
//   public name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }
// let new_name = new public_acess("Tuba Jan");
// console.log(new_name.name);

// ------------------------------------------class private_acess modifier------------------------------------------------

// class private_acess {
//   private name: string;
//   private id: number;

//   constructor(name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   } //is k liye getter setter lagana parta hai
// }
// let old_name = new private_acess("Bushra Jan", 5);
// console.log(old_name.name);
//Property 'name' is private and only accessible within class 'private_acess'.
// type myCarType = {
//   brand: string,
//   model: string,
//   year: number
//   }
//   class Car implements myCarType {
//   brand = "Toyota"
//   model = "Corolla"
//   year = 2024
//   }
// const myCar = new Car()
// console.log(myCar)
// Inharitance (extends) (super in costructor in drived class)
// Encapsulation (public , protected , private)
// public = accessable in and out of the  parent class and child class
// protected = accessable only in of the  parent class and child class        (no out side of the classess)
// private = accessable only in of the  parent class                   (no out side of the classess)
//

// class Person {
//   //parent class can be call as
//   // (parent class/super class/Base class)
//   protected name: string;
//   protected age: string;
//   constructor(pn: string, pi: string) {
//     this.name = pn;
//     this.age = pi;
//   }
//   result(isPresent: boolean) {
//     if (isPresent) {
//       return `
//       Name:${this.name}
//       age:${this.age}
//       isPresent today : ${isPresent}`;
//     } else {
//       return `
//         Name:${this.name}
//         age:${this.age}
//         isPresent today : ${isPresent}`;
//     }
//   }
// }
// const person = new Person("Ali Ahmed", "25 years");
// console.log(person.result(false));
// // console.log(person.pi);//throwing error qk age (pi) is protected
// // that is why it can't be call out side of the class

// // Derived class
// class Student extends Person {
//   //child class also known as
//   // (child class/sub class/derived class)
//   rollNo: number;
//   constructor(pn: string, pi: string, rol: number) {
//     super(pn, pi); //super function
//     this.rollNo = rol;
//   }
//   result(isPresent: boolean) {
//     if (isPresent) {
//       return `
//             Student Name:${this.name}
//             Student age:${this.age}
//             RollNo:${this.rollNo}
//             isPresent today : ${isPresent}`;
//     } else {
//       return `
//             Student Name:${this.name}
//             Student age:${this.age}
//             RollNo:${this.rollNo}
//             isPresent today : ${isPresent}`;
//     }
//   }
// }
// const student = new Student("Ahmed Ali", "14 years", 26);
// console.log(student.result(true));

// // private class concept
// class Bank {
//   public name: string;
//   protected age: string;
//   private balance: number = 300;
//   constructor(n: string, a: string) {
//     this.name = n;
//     this.age = a;
//   }
//   get getBalance() {
//     return this.balance;
//   }
//   set setBalance(b: number) {
//     this.balance += b;
//   }
// }
// const getbank = new Bank("Ali", "25 years");
// getbank.setBalance = 300;
// console.log(getbank.getBalance);
// console.log(getbank);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// interface pet {
//   name: string;
// }

// interface dog extends pet {
//   bark: () => boolean;
// }

// let mypet: dog = {
//   name: "tomy",
//   bark: () => true,
// };
// console.log(mypet);
// // interface extends hota hai
// // ab type ki bari

// type Animal = {
//   name: string;
//   age: number;
// };

// type Dog = Animal & {
//   breed: string;
// };
// // type me extends is tarha karty hain.
// const myDog: Dog = {
//   name: "Buddy",
//   age: 3,
//   breed: "Golden Retriever",
// };
// // ab classess ki bari k extends hoti k nahi
// class st {
//   game: string;
//   constructor(game: string) {
//     this.game = game;
//   }
// }

// class te extends st {
//   public id: number;
//   constructor(game: string, id: number) {
//     super(game);
//     this.id = id;
//   }
// }

// let new_game = new te("cricket", 1);
// console.log(new_game.id);

// for (let i = 0; i < 5; i++) {
//   console.log("*");
// }
// /**
//  * 10000000000
//  * 1 2
//  * 1 2 3
//  * 1 2 3 4
//  * 1 2 3 4 5
//  */
// let array = ["*", "*", "*", "*", "*"];
// for (let a = 0; a <= array.length; a++) {
//   array.pop();

//   console.log(array.toLocaleString());
// }

// for (let i = 1; i <= 5; i++) {
//   let rows = "";
//   for (let j = 1; j <= i; j++) {
//     rows += j + " ";
//     // let row = j;
//   }
//   console.log(rows);
// }

// for (let a = 0; a <= 5; a++) {
//   console.log(`Pakistan  ${a}th time`);
// }

// let a = 5;
// while (a > 0) {
//   console.log(a);
//   a--;
// }

// let fruits = [`apple`, "mango", "banana", "grapes", "orange", "cherry"];
// fruits.unshift("watermelon");
// for (let i = 0; i < fruits.length; i++) {
//   if (i == 3) {
//     console.log(`${fruits[i]} is not in the bucket `);
//   } else {
//     console.log(`${fruits[i]} is in the bucket `);
//   }
// }
// for (let element of fruits) {
//   console.log(element);
// }

// // type with functions
// type animal = {
//   name: string;
//   age: number;
//   bark: () => string;
//   kind_nature: () => boolean;
// };

// let my_pet: animal = {
//   name: "tomy",
//   age: 5,
//   bark: () => {
//     return "woof woof";
//   },
//   kind_nature: () => {
//     return true;
//   },
// };

// const my_pet_animal = (my_pet: animal) => {
//   return `name of my pet is ${my_pet.name}
//     age of my pet is ${my_pet.age}
//     and it barks like ${my_pet.bark()}
//     and it is a ${my_pet.kind_nature()} in kind nature.\n`;
// };
// console.log(my_pet_animal(my_pet));

// // array with type
// type phal = string[];

// let fruit: phal = [`akram`, "junaid", `hameed`, `faryal`];

// // import { num } from "./afile";

// // console.log(num(5, "Nawab"));

// function add(a: number, b: number): number {
//   return a + b;
// }
// const result: number = add(1, 2);

// // const errorResult: number = add("1", 2);//error

// const message: string = "Hello, world!";

// let myObject: object = { name: "John", age: 30, isStudent: true };
// console.log(myObject); //{ name: "John", age: 30, isStudent: true }

// let teacher = {
//   name: "Zeeshan",
//   experience: "10",
// };

// console.log(teacher.name);
// console.log(teacher["experience"]);

// Type Declaration
// let student: {
//   name: string;
//   age: number;
// };

// student = {
//   name: "Hira",
//   age: 30,
// };

// console.log(student["name"]); //dynamically
// console.log(student.age); //static

// let pet = "cook";
// console.log(
//   pet === "cat"
//     ? "It's billi"
//     : pet === "parrot"
//     ? "It's tota"
//     : pet === "dog"
//     ? "It's tommy"
//     : `No ${pet} is not a pet it is an animal`
// );

// function myCallBack(text: string) {
//   console.log("inside myCallback " + text);
// }

// function callingFunction(
//   initialText: string,
//   callback: (text: string) => void
// ) {
//   callback(initialText);
// }

// callingFunction("myText", myCallBack);
//overloads give us type-checked calls

// //its customary to order overloads from most specific to least specific
// function add(arg1: number, arg2: string): string;//option 1
// function add(arg1: number, arg2: number): number;//option 2
// function add(arg1: boolean, arg2: boolean): boolean;//option 3
// //this is not part of the overload list,
// //so it has only three overloads
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }

// //Calling 'add' with any other parameter types would cause an error except for the three options
// console.log(add(1, 2));
// console.log(add(5, "World"));
// console.log(add(true, false));

// for (let i = 0; i < 10; i++) {
//     setTimeout(()=>{
//         console.log(i);
//     },1000);
// }

1; //Tuples: Which of the following correctly defines a tuple in TypeScript?

// let point1: [number, string] = [4, "5"];

// // type aliases

// type myType = number | string | boolean;
// let falto: myType = 25;
// console.log(typeof falto); //number
// falto = "Ali";
// console.log(typeof falto); //string

// console.log(null == undefined);
// console.log(typeof(typeof[]));
// console.error("assdda");
// let count=5
// count+=5.
// console.log(count);

// index signature
// type og = {
//   id: number;
//   [abc: string]: any;
// };
// let VAR: og = {
//   id: 25,
//   city:'Karachi',
//   man:5,
//   ani:null,
//   ali:undefined,
//   size:true,
//   rollNo:()=>false,
//   var:[],
//   val:{}

// };
// type org = {
//   name: string;
//   [xyz: number]: any;
// };
// let ARG: org = {
//   name: "ali",
//   25: "ali",
//   152: true,
//   956: null,
//   785: undefined,
//   749: () => 452,
//   36: [],
//   14: {},
// };

// index signatute
// type index = {
//   name: string;
//   [syz: number]: any;
// };

// let ABC: index = {
//   name: "bj",
//   45: "ko",
//   12: 90,
// };

// interface surface {
//   radius: number;
// }

// interface earth {
//   radius: number;
// }

// interface asman {
//   radius: number;
//   length: number;
// }

// let Surface: surface = {
//   radius: 10,
// };

// let Earth: earth = {
//   radius: 5,
// };

// let sky: asman = {
//   radius: 25,
//   length: 15,
// };
// Surface = Earth; //ok
// Earth = Surface; //ok
// Earth = sky//ok
// // sky = Earth//ERROR
// Property 'length' is missing in type 'earth' but required in type 'asman'.
// function name():void {
//   return "abc";
// }
// let fv = name(`ali`);
// console.log(fv);
// console.log(name("allo"));

let victory = true;

// let tuple = [ string | number ]
// let point1: [number, string] = [4, "5"];

// let tuple: [number, string];
// let tuple1: [number, string]=[4,"6"]
// tuple = [4, "6"];
// console.log(tuple);
// tuple.push("5");
// tuple.join('-')
// console.log(tuple);
null == undefined
console.log(typeof null);

console.warn("hellots");
let myTuple:[string,number,boolean]

