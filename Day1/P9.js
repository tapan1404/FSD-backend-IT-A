const fs= require('fs');
fs.rmdir("mydir",(err)=>{
    if(err){
        console.error("error creating",err);
        return;
    }
    console.log("directory deleted");
})