// `apple`, `banana`, `mango`
let fruits = [];


function getFruits(fruits,cb){
    for(let add of fruits){
        console.log(`bunch of ${add} recevied`);
    }
    cb()
}
function impot(){
    console.log(`Callback\nYour Delivery has been done!`);
}
getFruits([`apple`, `banana`, `mango`],impot)