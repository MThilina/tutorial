const { error } = require('console');
const {createReadStream} = require('fs');

const stream = createReadStream('../files/larger-text.txt',"utf8");


stream.on('data',(result)=>{
    console.log(result);
});

stream.on('error',(error)=>{
    console.log(error.message);
})



