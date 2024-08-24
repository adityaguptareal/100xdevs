const fs=require("fs")
const {Command}=require("commander")
const app = new Command()

app
.name("File Line Reader")
.description("A File Line Reader which tells how many line is in your file")
.version("0.1.1")

app
.command("lineCount")
.description("This Command helps you to count the line in a file")
.argument("<file>","Enter the file url")
.action((file)=>{
    fs.readFile(file,"utf8",(err,data)=>{
        if(err){
            console.log(`Error ${err}`);
            
        }
        else{
            const lines=data.split("\n").length
            console.log(`There are ${lines}`);
            
        }
    })
})
app.parse()