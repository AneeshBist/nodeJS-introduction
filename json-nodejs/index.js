/*
 * convert to JSON
 * add data to a file
 * readfile
 * convert data to js obj
 * print in console
 */

const { log } = require("console");
const fs = require("fs");

const bioData = {
  name: "Billy",
  age: 20,
  gender: "M",
};

// const objData = JSON.parse(jsonData);
// console.log(objData.name);

const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
fs.writeFile("json1.json", jsonData, (err) => {
  console.log("JSON written to a file");
});

fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log("Reading JSON from a file");
  console.log(data);
  const orgData = JSON.parse(data);
  console.log("Original data: ", orgData);
});
