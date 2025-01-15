class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
   area() {
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log(`Painting with color ${this.color}`);
    }
    
 }
 
 const rect = new Rectangle(2, 4)
 const area = rect.area();
 console.log(rect)

const { rejects } = require('assert');
//  

// const date=new Date()
// console.log(date.getMonth());


// const map=new Map()
// map.set('name',"Aditya")
// map.set('age',"17")
// const firstName=map.get("name")
// console.log(firstName);



// function readTheFile(sendTheFinalVale) {
    
// }


// function doTimeCall(resolve) {
//     console.log('hi');
    
// }



// function first() {
//     console.log('hi');
    
// }

// setTimeout(() => {
//     first()
//     setTimeout(() => {
//     console.log('Hello There');
//         setTimeout(() => {
//            console.log('After 5 Second');
            
//         }, 5000);
//     }, 4000);
// }, 1000);


// function setTimeoutPromisified(duration) {
//     return new Promise(function(resolve){
//         setTimeout(resolve,duration)
//     })
// }

// function callback() {
//     console.log('Hi this is callback');
    
// }

// setTimeoutPromisified(4000).then(callback)

const fs=require('fs')

function readFileSync() {
    return new Promise((resolve,rejects)=>{
        fs.readFile("a.txt","utf-8",function(err,data){
            if(err){
                rejects(err)
            }
            else{
                resolve(data)
            }
        })
    })
}