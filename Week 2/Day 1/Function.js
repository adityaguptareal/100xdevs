function sum(a,b) {
    return a+b
}

let a=sum(6,8)
console.log(a);

// Sum of n numbers
function sumNumbers(d) {
    // return d*(d+1)
    let ans = 0
    for (let index = 0; index < d; index++) {
        ans = index + ans

    }
        return ans
}

let tests = sumNumbers(6)
console.log(tests);


const fs=require("fs")
function print(err,res){
    if (err){
        console.log('File Not Found');
        
    }
    else{
        console.log("File is printed succesfully");
        res()
    }
}
let file=fs.readFile("a.txt","utf-8",print())
console.log(file);

