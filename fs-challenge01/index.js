// CRUD using file system

const fs = require("fs");

//make a folder
//fs.mkdirSync("crud");

//creating a file and adding data to it
//fs.writeFileSync("crud/bio.txt", "Creating a file in challenge.");

//appending more data to the file
//fs.appendFileSync("crud/bio.txt", "Adding some text to already exisitng data.");

//reading the data and getting buffer data
//const readData = fs.readFileSync("crud/bio.txt").toString();
//console.log(readData);

//reading the data and without getting buffer data
//const readData = fs.readFileSync("crud/bio.txt", "utf8");
//console.log(readData);

//renaming the file name to mybio.txt
//fs.renameSync("crud/bio.txt", "crud/mybio.txt");

//deleting the file
//fs.unlinkSync("crud/mybio.txt");

//deleting the folder
fs.rmdirSync("crud");
