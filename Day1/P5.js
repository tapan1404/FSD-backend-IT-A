const fs=require('fs');
const write=()=>{
    fs.writeFile('./mydir/file.txt',"hello bro",(err)=>{
        if(err) throw err;
        console.log("file written");
    });
}
write();