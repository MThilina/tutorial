const {readFile,writeFile}= require('fs');

// First call back async read call

readFile('../files/first.txt',"utf8",(err,result)=>{
    if(err){
    console.log(err);
    return;
    }
  
const firstFile = result;
    

    // second call backup function for async read call 

    readFile('../files/second.txt',"utf8",(err,result)=>{
        if(err){
        console.log(err);
        return;
        }
    
const secondFile = result;
        
   

    // Final call back fuction for aync write to file 
    const writtenText = `This is the apended text : ${firstFile},${secondFile}`;
    writeFile('../files/aync-details.txt',writtenText,{flag:'a'},(err,res)=>{
        if(err!=null){
            console.log(err);
            return null;
        }
        else{
            console.log("Data stream written in to the file..");
        }
     });
    });
});

