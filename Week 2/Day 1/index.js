
// const fs=require("fs")
// let a="Hi Aditya"
// // Reading file Synchronously
// let b=fs.readFileSync("data.txt","utf-8")
// // Reading file Asynchronously
// let c=fs.readFile("data.txt","utf-8")
// console.log(b);


const fs =require("fs")

function print(err,data) {
    if(err){
        console.log('Some Error Occured');
        
    }
    else{
        console.log(data);
        
    }
}
let a=fs.readFile("data.txt","utf-8",print)
console.log(a);
