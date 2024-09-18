const {readFileSync,writeFileSync} = require('fs');

// reading data from file directory 
var firstFile = readFileSync('../files/first.txt','utf8');
var secondFile = readFileSync('../files/second.txt','utf8');

console.log(firstFile);
console.log(secondFile);

var writtenData = `The written Data : ${firstFile}, ${secondFile} \n`
console.log(writtenData);


// writing read data to a file 
writeFileSync('../files/writtenFile.txt',writtenData,{flag:'a'})