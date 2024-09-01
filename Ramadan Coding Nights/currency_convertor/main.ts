#! usr/bin/env node
import inquirer from "inquirer";

const currency: any = {
  USD: 1,
  EUR: 0.9, //USD
  GBP: 0.8, //USD
  JPY: 110, //USD
  INR: 75, //USD
  PKR: 1.2, //USD
};

let Answer: any = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    message: "Please select  from currency 😉  :",
    choices: ["USD", "EUR", "GBP", "JPY", "INR", "PKR"],
  },

  {
    name: "to",
    type: "list",
    message: "Please select to currency 😉  :",
    choices: ["USD", "EUR", "GBP", "JPY", "INR", "PKR"],
  },
  {
    name: "amount",
    type: "number",
    message: "Enter youe amount ",
  },
]);
//conditions for checking which currency is selected
if (Answer.to === "USD") {
  console.log(
    "\nOHO😉 Dollar me Exhange Karwa rahy ho.\n Q 😜 koi lootery lagi hai.\n"
  );
}
if (Answer.to === "EUR") {
  console.log(
    "\nArray wah😉 EURO me Exhange Karwa rahy ho.\n  Pakka🤪 tumhari qismat chamqi hai.\n"
  );
}
if (Answer.to === "PKR") {
  console.log(
    "\nPKR me Exhange Karwa rahy ho.🥸\n aww koi bat ni beta roty ni hain .\n😭 na beta roty ni hain \n"
  );
}
if (Answer.to === "INR") {
  console.log(
    "\nBary wo insan 🙍🏻‍♂️ ho Pakistani ho kar INR 😏 me Exchange karwa rahy ho.\n tume to life ki .gitignore me dal dena chahiye.\n"
  );
}
if (Answer.to === "GBP") {
  console.log("\nOHO😉 GBP me Exhange Karwa rahy ho.\n Q 😜 koi lootery lagi hai.\n");
}
if (Answer.to === "JPY") {
  console.log("\nOHO😉 JPY me Exhange Karwa rahy ho.\n Q 😜 koi lootery lagi hai.\n");
}

// "from_amount" ka variable banaya hai jisme
// Answer.from ko type:any curency k through arahi hai

let from_amount = currency[Answer.from];

// "to_amount" ka variable banaya hai jisme
//Answer.to ki value bhi curency k through arahi hai

let to_amount = currency[Answer.to];

//yaha Answer.amount ki value ""input_amount"" me assign/store ki hai
let input_amount = Answer.amount;

// here we convert the amount into our base currency USD=1
let convert_into_base_amount = input_amount / from_amount;

// here we convert the amount into our base currency USD=1
let desired_amount = convert_into_base_amount * to_amount;

//logging our desired_amount
console.log(desired_amount);
