const fs=require('fs');
const Append=()=>{
    fs.appendFile('file.txt',"hello bro append",(err)=>{
        if(err) throw err;
        console.log("file written");
    });
}
Append();