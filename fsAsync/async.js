const fs = require("fs");

// const dataSync = fs.readFileSync("read.txt", "UTF-8");
// console.log(dataSync);

fs.readFile("read.txt", "UTF-8", (err, data) => {
  console.log(data);
});
console.log("after the data");
