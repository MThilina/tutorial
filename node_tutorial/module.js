const os = require('os');

// Get user information
var userInfo = os.userInfo();

console.log(userInfo);
console.log(`System up time : ${os.uptime} seconds`);


var operatingSystem={
    name : os.type(),
    version : os.version(),
    fullMem : os.totalmem(),
    freeMem : os.freemem(),
    cpuDetail: os.cpus(),
    networkInterface:os.networkInterfaces()
}

console.log("System details :"+ JSON.stringify(operatingSystem, null, 2));

