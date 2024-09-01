console.log("hello World!");

console.log("Hi Hello Kesi ho")

let FirstName = "Tuba Jan";
console.log(FirstName);


FirstName = "The Great Tuba Jan";
console.log(FirstName)
console.log(typeof FirstName);

let $firstname = "Bushra Jan";
let array1: string[] = ['tuba', '282 ', 'tuba', 'tuba', 'tuba', 'tuba', 'tuba',]
console.log(array1);
console.log($firstname);

let n1 = 10;
let n2 = 20;
let nu_m = n1 + n2;
console.log(nu_m);
console.log(n1 + n2);
console.log(10 + 20);
console.log("\n")

let no1 = 30;
let no2 = 60;
let no3 = no1 - no2;
let no4 = no2 - no1;

console.log(no3);//-30
console.log("\n")
console.log(no4);//30
console.log("\n")

console.log(no1 - no2); //-30
console.log(no2 - no1);//30


let div1 = 30
let div2 = 60
let div0 = div1 * div2;
console.log(div0)//180
console.log(div1 * div2)//180
console.log("\n")



let dv1 = 30
let dv2 = 60
let dv0 = dv1 / dv2;
console.log(dv0)//0.5
console.log(dv1 / dv2)//0.5
console.log("\n")

let div3 = 4
let div4 = 9
let div5 = div3 / div4;
console.log(div5)//0.5
console.log("\n")
console.log(" Division " + div3 / div4)//0.5
console.log("\n")
console.log(" Modules " + div3 % div4)//1


console.log("\n")
let exp1 = 5;
let exp2 = 2;
let exp4 = exp1 ** exp2;
console.log(exp4)
console.log("\n")
console.log(exp1 ** exp2)
console.log(exp1 ** 3)
console.log("\n")


//Concatination
let con = "tuba"
let con1 = "jan"
let con2 = 282
let con3 = "@gmail.com"
console.log(con + con1 + con2 + con3);
console.log("\n")
//Concatination
let add1 = "tuba"
let add2 = 282
let add3 = 2
console.log(add1 + add2 + add3);
console.log("\n")
//Addition
let fir = 23;
let fir1 = 2;
console.log(fir + fir1);
console.log("\n")

let n = 5;
console.log(n); // 5
n += 5; 
console.log(n); // 10
n -= 5;
console.log(n); // 5
console.log("\n")

let m = 4
console.log(m += 4); // 8
console.log("\n")
console.log(m += 4); // 12
console.log("\n")
console.log(m *= 4); // 48
console.log("\n")
console.log(m /= 2); // 24
console.log("\n")
console.log(m -= 40); // -16
let power = 24;
console.log(power **= 2); //576
console.log("\n")
console.log(power /= 2); //733
console.log("\n")
console.log(power %= 2); //1
console.log("\n")




//  ************************************************************
//  ************************************************************
//  ************************************************************
//  ************************************************************
//  *******My Own Practise Section******************************
//  ************************************************************
//  ************************************************************
//  ************************************************************
//  ************************************************************
//  ************************************************************
let a = "2";
console.log(typeof(a));
let checkvariable = "Type string";
let checknum = 282;
console.log(typeof checkvariable);
console.log(typeof checknum);


console.log("\n")
let p = 5;
console.log(p == 5); //true
console.log(p === 5); //===: This is the strict equality operator. It checks if the value on the left is equal to the value on the right, without any type coercion.
console.log(p != 5); //false
console.log(p > 8); //false 
console.log(p < 8); //true
console.log(p >= 8); //false
console.log(p <= 8); //true
console.log("\n")

let value1 = "Tuba Jan";
let value2 = "tubajan"
if (value1 == value2) {
    console.log("That's my name")
    //It does'nt print anything cause this is false condition
}


let v1 = 282
let v2 = 283
if (v1 == v2) {
    console.log("good job")
} else {
    console.log("bad job")
}

let val1 = 24
let val2 = 25
let val3 = 26
let val4 = 27
let val = 20
if (val <= 20 && val >= 27) {//false
    console.log("got no points")
} else if (val >= val3) {
    console.log("got no points")
}
else if (val4 >= val3) {
    console.log("got 3 points")
}
else {
    console.log("good job")
}

// *************************************************
console.log("\n")
// *************************************************
// *************************************************
// *************************************************
// Ticketing system
let country = "pakistan"
// Number() function is used to convert the string to number
let age = 10
if (country === "pakistan") {
    if (age >= 18) {
        console.log("Here is your ticket")
    } else {
        console.error("Age restriction")
    }
} else {
    console.log("Invalid country")
}
console.log("\n")

if (country === 'pakistan') {
    if (age >= 18) {
        console.log("Here Your ticket")
    } else if (age <= 18) {
        console.log("You are under age")
    } else if (age < 18) {
        console.log("You are a kid")
    }
} else {
    console.log("do you belong to Pakistan..?")
}
console.log("\n")

function greet(name:"tubajan",age:254,wage:14.5){
    let a="Hello "+name+"Your name contains "+name.length+"letters and your age is "+age+"whats your wage.?" 


}console.log