"use strict";
// let bushra = {
//   name: "bj",
//   age: 53,
//   ismarried: false,
// };
// console.log("\n\n\n", bushra);
Object.defineProperty(exports, "__esModule", { value: true });
// today class-12 start with array
let fruits = ["apple", "orange", "mango", "grapes"];
console.log("\n\n\nOriginal Array of Fruits:\n", fruits);
fruits[0] = "grapes";
console.log("\n\n", fruits); //['apple','orange','mango']
console.log("\n\n", fruits[2541]); // undefined
fruits.pop();
console.log(fruits);
fruits.push("grapes", "melon", "cheko ");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("banana", "peach", "papaya");
console.log(fruits);
let sliced_array = fruits.slice(1, 0);
console.log(sliced_array);
let slice_array = fruits.slice(1, 0);
console.log(slice_array);
let slice = fruits.slice(-3);
console.log(slice);
console.log(fruits.slice(1, 2));
console.log(fruits);
fruits.splice(0, -2, "banana", "peach", "watermelon", "guawa");
console.log(fruits);
// Object
const mycar = {
    brand: 456,
    name: "Toyota",
    yearmodel: 2013,
    maxspeed: () => {
        return "Maxspeed 200";
    },
    start: () => {
        return "starting";
    },
};
console.log("\nOBJECT CAR\n\n", "Brand:", mycar.brand, "\n Name :", mycar.name, "\n Yearmodel:", mycar.yearmodel);
mycar.yearmodel = 5623;
console.log(" Yearmodel:", mycar.yearmodel);
console.log(" Start Engine:", mycar.start());
console.log(" Start Engine:", mycar.maxspeed());
//Student object:-
let student = [
    {
        name: "Busha jan",
        email: "Bushrajan@gmail.com",
        rollno: 1,
    },
    {
        name1: "Tuba jan",
        email1: "tubajan@gmail.com",
        rollno1: 2,
    },
    {
        name2: "uzafa jan",
        email2: "uzafajan@gmail.com",
        rollno2: 3,
    },
];
console.log("\n\n\n STUDENTS DATA\n\n", student);
console.log("\n\n\n STUDENTS DATA\n\n", "\nName: ", student[0].name, "\nEmail: ", student[0].email, "\nRoll no: ", student[0].rollno);
console.log("\n\n\n STUDENTS DATA\n\n", "\nName: ", student[1].name1, "\nEmail: ", student[1].email1, "\nRoll no: ", student[1].rollno1);
console.log("\n\n\n STUDENTS DATA\n\n", "\nName: ", student[2].name2, "\nEmail: ", student[2].email2, "\nRoll no: ", student[2].rollno2);
const irfan1 = "\n\n4521554";
const irfan2 = "\n8158154";
console.log(irfan1, irfan2);
const student_S = "\n\nStudent";
const teacher_T = "\nTeacher";
console.log(student_S, teacher_T);
