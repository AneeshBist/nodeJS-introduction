const fs = require("fs");

// fs.writeFile("read.txt", "A good day to code.", (err) => {
//   console.log("file is created");
//   console.log(err);
// });

// fs.appendFile("read.txt", "So a great one to learn something.", (err) => {
//   console.log("task completed.");
// });

fs.readFile("read.txt", "UTF-8", (err, data) => {
  console.log("file read is a success");
  console.log(data);
});
