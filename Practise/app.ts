// // import inquirer from "inquirer";
// // import chalkAnimation from "chalk-animation";
// // import figlet from "figlet";
// // import chalk from "chalk";

// // let getName = await inquirer.prompt([
// //   {
// //     name: "user",
// //     type: "input",
// //     message: chalk.blue("what is your name ?"),
// //   },
// // ]);
// // async function welcome() {
// //   await new Promise((res) => {
// //     figlet(`Welcome ${getName.user}`, function (err: any, data: any) {
// //       if (err) {
// //         console.dir(`Oops something went wrong`);
// //         console.log(err);
// //       }
// //       let animate = chalkAnimation.rainbow(data);
// //       setTimeout(() => {
// //         res(animate.stop());
// //       });
// //     });
// //   });
// // }
// // welcome();

// import inquirer from "inquirer";
// import chalkAnimation from "chalk-animation";
// import figlet from "figlet";
// import chalk from "chalk";

// async function main() {
//   let getName = await inquirer.prompt([
//     {
//       name: "user",
//       type: "input",
//       message: chalk.blue("what is your name?"),
//     },
//   ]);

//   await welcome(getName.user);
// }

// async function welcome(username: any) {
//   return new Promise((res) => {
//     figlet(`Welcome ${username}`, function (err: any, data: any) {
//       if (err) {
//         console.dir(`Oops something went wrong`);
//         console.log(err);
//       } else {
//         let animate = chalkAnimation.rainbow(data);
//         setTimeout(() => {
//           res(animate.stop());
//         }, 2000); // adjust the timeout as needed
//       }
//     });
//   });
// }

// await main();

// let getAge = await inquirer.prompt([
//   {
//     name: "age",
//     type: "input",
//     message: "Enter Your Age.",
//   },
// ]);
// let checkage = async () => {
//   return new Promise((resolve, reject) => {
//     if (typeof getAge.age === "string" && getAge.age > 18) {
//       resolve(getAge.age + " years old");
//     } else {
//       reject("You are under age.");
//     }
//   });
// };
// checkage()
//   .then((Y) => {
//     console.log(`\nYou are eligible for CNIC card`);
//     return Y;
//   })
//   .then((Yes) => {
//     console.log(Yes);
//   })
//   .catch((N) => {
//     console.log(`\nYou are not eligible for CNIC card`);
//     return N;
//   })
//   .then((No) => {
//     console.log(No);
//   });

// import inquirer from "inquirer";

// let getname = async () => {
//   return await new Promise((resolve, reject) => {
//     let getName: any = inquirer.prompt([
//       {
//         name: "user",
//         type: "input",
//         message: "what is your name?",
//       },
//     ]);

//     if (getName.user.length > 5) {
//       setTimeout(() => {
//         resolve(`Welcome ${name}`)
//       }, 2000);
//     } else {
//       setTimeout(() => {
//         reject("Name is too short");
//       }, 2000);
//     }
//   });
// };

// async function checking() {
//   try {
//     // console.log(await getname());

//     let name = await getname()
//     console.log(name);

//   } catch {
//     console.log("Name is too short");
//   }
// }
// let getResult = await checking();
// console.log(getResult);

// function isPalindrome(str: any) {
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
//   }
//   if (rev == str) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isPalindrome("racecar"); //true
// isPalindrome("tuba"); //false
// // isPalindrome("nitin"); //true
// // isPalindrome("anina"); //true

let fruits = "Banana";
let fruits2 = (fruits.match(/a/g) || []).length;
console.log("no of a in this word Banana is", fruits2);
