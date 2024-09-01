// //-------- Type Aliases --------
// type girl = string;
// type boy = string;


// let Name_1: girl = "Hunzalah";
// let Name_2: boy = "Hunzalah";
// console.log(Name_1, Name_2);

// //-------- Type Aliases in Objects --------

// type student = {
//   st_name: string;
//   st_age: number;
// };

// let inquirey: student = {
//   st_name: "Suresh",
//   st_age: 22,
// };
// console.log(inquirey);

// //-------- Type Aliases in Objects contains arrow function --------

// let id: number = 245;

// let my_car: { make: string, model: number, max_speed: () => number, } = {
//   make: "Corola",
//   model: 2019,
//   max_speed: () => 200,
// };
// //             or we can use type aliases

// type car = {
//   make: string;
//   model: number;
//   color: string;
//   max_speed: () => number;
// };

// let My_Car: car = {
//   make: "Corola",
//   model: 2019,
//   color: "Black",
//   max_speed: () => 200,
// };
// // now if I want color from object My_car

// console.log(My_Car.color); // . (dot)represents object property

// //               do Zoom in for better understanding

// // -------- Type Aliases with Nested Object --------

// type slip = { customerName: string;  items: { itemNo_1: string; itemNo_2: string; itemNo_3: string; }; total: number; };

// let Bill: slip = {
//   customerName: "Ali",
//   items: {
//     itemNo_1: "Shoes",
//     itemNo_2: "Clothes",
//     itemNo_3: "Food",
//   },
//   total: 550,
// };

// // Now if I want itemNo_2 from items of Object Bill
// console.log(Bill.items.itemNo_2); //Clothes


// //-------- Type Unions --------
// let usage: string | boolean | number = "Yes present";
// console.log(usage); //Yes present

// usage = true;
// console.log(usage); //true

// usage = 454;
// console.log(usage); //454

// //-------- Type Literals --------

// let shirt: "small" | "medium" | "large";

// shirt = "small";
// shirt = "medium";
// shirt = "large";
// // shirt = "x-large"//Type '"x-large"' is not assignable to type '"small" | "medium" | "large"'. Did you mean '"large"'?

// // -------- Type Intersection --------

// type Student = { studentName: string; rollNo:  string; };
// type Teacher = { teacherName: string; subject: string; };


// // you can assign type Student and Teacher to the third type then assign it your main variable
// type Class = Student & Teacher;



// //or you can also assign type Student and Teacher directly to your main variable
// let classDetails: Student & Teacher = {
//   studentName: "Suresh",
//   rollNo: "001",
//   teacherName: "Ali",
//   subject: "Maths",
// };


type Student1 = { studentName2: string; };
type Teacher1 = { teacherName2: string; };

type Class2 = Student1 & Teacher1 ;

let classDetails2: Student1 & Teacher1 = {
  
  studentName2: "Suresh",
  teacherName2: "Ali",
 
}

// //-------- Type Literals --------

// let shirt: "small" | "medium" | "large";

// shirt = "small";
// shirt = "medium";
// shirt = "large";