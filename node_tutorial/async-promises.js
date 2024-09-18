const {readFile,writeFile} =require('fs')
const util = require('util')

const readFilePromisify = util.promisify(readFile);
const writeFilePromisify = util.promisify(writeFile);

// async process 
const start = async () =>{
    try{
        const firstFile = await readFilePromisify('../files/first.txt',"utf8");
        const secondFile = await readFilePromisify('../files/second.txt',"utf8");

        const writtenText = `This is a new tex : ${firstFile},${secondFile}\n`;
        await writeFilePromisify('../files/async-promises.txt',writtenText,{flag:'a'});
    }catch(error){
        console.log(error);
    }
}

start();

