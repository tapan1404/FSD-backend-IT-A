const fs= require('fs');
fs.mkdir("mydir",(err)=>{
    if(err){
        console.error("error creating",err);
        return;
    }
    console.log("directory created");
})