const { log } = require("console");
const fs = require("fs");

//creating a new file
//fs.writeFileSync("read.txt", "this is a file created via node module");

//fs.writeFileSync("read.txt", "Trying to override file via node module");

//fs.appendFileSync("read.txt", "and now adding to an already creatde file.");

/*
 * Node JS conatins an additional data type called Buffer
 * (not available in browser's Javascript).
 * Buffer is maily used to stroe binary data,
 * while readingfrom a file or receiving packets over the network.
 */
// const buf_fs = fs.readFileSync("read.txt");
// org_data = buf_fs.toString();
// console.log(org_data);

fs.renameSync("read.txt", "readwrite.txt");
