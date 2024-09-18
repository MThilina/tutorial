const {readFile} = require('fs').promises
const { EventEmitter } = require('events')

const customEvent = new EventEmitter();
customEvent.on('data', async ()=>{
    try{
      const dataChunk = await readFile('../files/larger-text.txt','utf8');
      console.log(dataChunk);
    }catch(err){
        console.error(`Issue occured :${err}`);
    }
    
});

customEvent.emit('data');