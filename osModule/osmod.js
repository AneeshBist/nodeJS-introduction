const os = require("os");

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

const freeMem = os.freemem();
console.log(`${freeMem / 1024 / 1024 / 1024}`);

const totMem = os.totalmem();
console.log(`${totMem / 1024 / 1024 / 1024}`);
