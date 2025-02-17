const fs=require('fs');
const write=()=>{
    fs.writeFile('file.txt',"hello bro",(err)=>{
        if(err) throw err;
        console.log("file written");
    });
}
write();