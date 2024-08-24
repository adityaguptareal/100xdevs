const fs=require("fs")
const {Command}=require("commander")
const program=new Command()

program
.name("File Line Reader")
.description("A Line read app which read how many line are there in the file")
.version("1.2.2")

program
.command("countLine")
.description("Used to count number of lines")
.argument("<file>","Enter File path")
.action((file)=>{
    fs.readFile(file,"utf8",(err,data)=>{
        if(err){
            console.log(`Caused an error ${err}`);
            
        }
        else{
          const lines=data.split("\n").length
          console.log(`Total number of lines in file ${lines}`);
          
            }
        
    })
})
program.parse()