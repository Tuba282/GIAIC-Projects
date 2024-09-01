"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("One");
console.log("Two");
// using setTimeout()
function make_promise() {
    return "Three";
}
setTimeout(() => {
    console.log(make_promise());
}, 2000);
// using Promise
let makePromise2 = () => {
    let mine = "karachi";
    new Promise((resolve, reject) => {
        if (mine === "karachi") {
            resolve("YO Live in Karachi. ");
        }
        else {
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
