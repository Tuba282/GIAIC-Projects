"use strict";
let Name_1 = "Hunzalah";
let Name_2 = "Hunzalah";
console.log(Name_1, Name_2);
let inquirey = {
    st_name: "Suresh",
    st_age: 22,
};
console.log(inquirey);
//-------- Type Aliases in Objects contains arrow function --------
let id = 245;
let my_car = {
    make: "Corola",
    model: 2019,
    max_speed: () => 200,
};
let My_Car = {
    make: "Corola",
    model: 2019,
    color: "Black",
    max_speed: () => 200,
};
// now if I want color from object My_car
console.log(My_Car.color); // . (dot)represents object property
let Bill = {
    customerName: "Ali",
    items: {
        itemNo_1: "Shoes",
        itemNo_2: "Clothes",
        itemNo_3: "Food",
    },
    total: 550,
};
// Now if I want itemNo_2 from items of Object Bill
console.log(Bill.items.itemNo_2); //Clothes
//-------- Type Unions --------
let usage = "Yes present";
console.log(usage); //Yes present
usage = true;
console.log(usage); //true
usage = 454;
console.log(usage); //454
//-------- Type Literals --------
let shirt;
shirt = "small";
shirt = "medium";
shirt = "large";
//or you can also assign type Student and Teacher directly to your main variable
let classDetails = {
    studentName: "Suresh",
    // rollNo: "001",
    teacherName: "Ali",
    // subject: "Maths",
};
