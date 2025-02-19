const fs=require('fs/promises');
const write=async()=>{
    const data="new new data"
    fs.writeFile("./data.txt",data,(err)=>{
        if(err)
            console.log("error",err)
        else console.log("uploaded");
    });
};
write();