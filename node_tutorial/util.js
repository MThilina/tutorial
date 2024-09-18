const {writeFile } = require('fs').promises

//  creating hard coded file stream operations 
async function createFile() {
    let writtenText = `This is amazing buffer size should be more than 64,000\n`;
    for (let i = 0; i < 10000; i++) {
        await writeFile('../files/larger-text.txt', writtenText, { flag: 'a' });
    }
}

createFile();
console.log("File Generation Complete...");
