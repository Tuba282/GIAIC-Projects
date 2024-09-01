console.log("One");
console.log("Two"); //they will work synchoronously

// using setTimeout()
function make_promise(): string {
  return "Three";
}
setTimeout(() => {
  console.log(make_promise()); //it will work asynchoronously
}, 2000);

// using Promise
let makePromise2 = () => {
  let mine = "karachi";
  new Promise((resolve, reject) => {
    if (mine === "karachi") {
      resolve("YO Live in Karachi. ");
    } else {
      reject("YO BUDDY why you don't Live in Karachi.");
    }
  })

    .then((live) => {
      setTimeout(() => {
        console.log(live);
      }, 2000);
    })
    .catch((notlive) => {
      setTimeout(() => {
        console.log(notlive);
      }, 2000);
    });
};

makePromise2();

// Structural Typing
interface Yango {
  name: string;
  IsCar: boolean;
}

interface Uber {
  name: string;
  IsCar: boolean;
}

let yango: Yango = {
  name: "yango",
  IsCar: true,
};
let uber: Uber = {
  name: "Uber",
  IsCar: true,
};

yango = uber; //(Strural typing jis me obj ki properties + datatypes same hoti hain.)

// Index Signatur

interface Slip {
  //Fresh Object
  CustomerName: string;
  [key: string]: unknown;
}

let Bill: Slip = {
  CustomerName: "Ahmed",
  Customerid: 18, //we can add multiple values of diefferent data types
};

interface Std {
  name: string;
  ID: number;
  [key: string]: unknown;
}
let Student: Std;

// Stale Object
Student = {
  name: "Sana",
  ID: 2589,
  City: "Karachi",
  IsMarried: false,
  marks: {},
  friends: [],
  nature: () => `Kind+Friendly`,
};
