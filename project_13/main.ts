// promise of birthday party
let surprise = true;
function birthdayParty() {
  return new Promise((resolve, reject) => {
    if (surprise) {
      resolve("Welcome to party");
    } else {
      reject("No Entry");
    }
  });
}

birthdayParty()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//concept of promise.all
let promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise 1 resolved");
  }, 2000);
});

let promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, 2000);
});

let promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise 3 resolved");
  }, 2000);
});

Promise.all([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));

//   classess
class Person {
  // class properties
  name: string = "Ali";
  age: number = 21;
}
const P1 = new Person();//instance of class
console.log(P1.name); //Ali
console.log(P1.age); //21

// class with constructor
class Slip {
  cus_name: string;
  cus_id: number;
  constructor(cus_name: string, cus_id: number) {
    this.cus_name = cus_name;
    this.cus_id = cus_id;
  }
}
// note: "new" keyword constructor k function ko call karta hai.
// or ek naya object banata hai.
const bill = new Slip("Ali", 1);
console.log(bill);

// class with contructor and function within class

class Office {
  emp_name: string;
  emp_id: number;
  constructor(emp_name: string, emp_id: number) {
    this.emp_name = emp_name;
    this.emp_id = emp_id;
  }
  display() {
    console.log(`${this.emp_name} ID: ${this.emp_id} is absent today.`);
  }
}

const emp = new Office("Ali", 1);
console.log(emp.display());

// class with contructor and function with parameters

class Student {
  std_name: string;
  std_id: number;
  constructor(std_name: string, std_id: number) {
    this.std_name = std_name;
    this.std_id = std_id;
  }
  getRecord(rank: string) {
    console.log(`Student Name: ${this.std_name}
                     Student ID: ${this.std_id}
                      Rank: ${rank}`);
  }
}

const result = new Student("Ahmed", 25);
result.getRecord("1st");
