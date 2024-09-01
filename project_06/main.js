"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`\t its my project 06\n\n`);
//Functions
//Static function
function name() {
    console.log(`it is good to be here \n`);
}
name();
// -------------------------------------------------
// function with return type
function cal() {
    return 10 + 10;
}
console.log(cal());
//Dynamic function (with parameters)
function fullName(a) {
    return `hey buddy I am ${a}`;
}
console.log(fullName(`Kamran`));
// -------------------------------------------------
// function with default  parameters
function de_fault(city, country = "Pakistan") {
    return `${city} is in ${country}`;
}
console.log(de_fault(`Karachi`));
console.log(de_fault(`Washington DC`, `USA`));
console.log(de_fault(`Tokyo`, undefined));
// -------------------------------------------------
// function with return data type
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
// -------------------------------------------------
// function with rest parameters
function friends(...names) {
    return `I have so many friends like ${names}`;
}
console.log(friends(`Subhan`));
console.log(friends(`Ayesha`, `Kamran`));
// -------------------------------------------------
// Arrow function
const arrow_func = () => {
    const num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let new_array = num_array.map((add) => add * 2);
    return num_array + "\n\n" + new_array;
};
console.log(arrow_func());
// -------------------------------------------------
// arrow function with default parameters and return type
const exp_2 = (location_1 = "Karachi", location_2 = "Lahore") => {
    return `I live in ${location_1} but my backgroung is from  ${location_2}`;
};
console.log(exp_2(`USA`, `Pakistan`));
console.log(exp_2());
