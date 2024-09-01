// // Define a function that returns a Promise
// let cup = true;
// const coffee = () => {
//   return new Promise((res, rej) => {
//     if (cup) {
//       setTimeout(() => {
//         res(`Coffee is ready`);
//       }, 1200);
//     } else {
//       setTimeout(() => {
//         rej(`Coffee is not  ready`);
//       }, 1200);
//     }
//   });
// };
// // coffee()
// //   .then((ready) => {
// //     console.log(ready);
// //   })
// //   .catch((notReady) => {
// //     console.log(notReady);
// //   });

// // Define a variable
// let victory = false;

// // Define a function that returns a Chaining in Promise
// const cricket = () => {
//   return new Promise((resolve, reject) => {
//     if (victory) {
//       console.log(`Match is in progress`);
//       setTimeout(() => {
//         resolve("we won"); // Resolve the Promise with "we won"
//       }, 2000);
//     } else {
//       console.log(`Match is in progress`);
//       setTimeout(() => {
//         reject("we lost"); // Reject the Promise with "we lost"
//       }, 2000);
//     }
//   });
// };

// // Call the cricket function and handle the Promise
// cricket()
//   .then((result) => {
//     console.log(`Yeah ` + result); // Log the resolved value
//     return `Good job team `; // Return a message
//   })
//   .then((response) => {
//     console.log(response); // Log the final message
//     return "chalo flight pakro.... "; // Return another message
//   })
//   .then((response) => {
//     console.log(response); // Log the last message
//   })
//   .catch((error) => {
//     console.log(`No bro why  ` + error); // Log the rejected value
//     return `By the way Good job team `; // Return an alternative message
//   }).then((response) => {
//     console.log(response); // Log the final message
//     return "chalo flight pakro.... "; // Return another message
//   })
//   .then((response) => {
//     console.log(response); // Log the last message
//   })

// // Call the cricket function and handle the Promise with async /await
// async function getResult() {
//   try {
//     const result = await cricket();
//     console.log(`Yeah ` + result);
//   } catch (error) {
//     console.log(`No bro why  ` + error);

//   }
//    finally{
//     console.log(`Come back Home`);
//   }
// }
// // Call the function
// // getResult()

// // callback
// function getFullname(name: string, cd: (age: number) => void) {
//   let get = `Hey my name is ${name}`;
//   console.log(get);
//   cd(23);
// }

// // getFullname("sakib muhammad shakoor",age=>console.log(age))
// getFullname("sakib muhammad shakoor", (age) => {
//   console.log(age);
//   console.log("here sakib's full name and age");
// });
function one(a: number, b: number, cb: (ev: number) => void) {
  console.log("one");
  console.log(a + b);
  cb(25);
}
// function two() {
//   console.log(`two`);
// }
one(5, 6, (ev) => {
  console.log("two");
  console.log(ev);
  console.log(`Three`);
});
