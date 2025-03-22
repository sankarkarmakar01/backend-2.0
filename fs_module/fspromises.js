const fs = require("fs");
// const fs = require("fs/promises");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

const file = __dirname;

// fs.promises
//   .readdir(file)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// fs.promises
//   .writeFile(filePath, "This is the initial data", "utf-8")
//   .then(() => console.log("File Created Successfully!!"))
//   .catch((err) => console.error(err));

// fs.promises.readFile(filePath, "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));


// fs.promises
//   .appendFile(filePath, "\nThis is the updated data", "utf-8")
//   .then(() => console.log("File Updated Successfully!!"))
//   .catch((err) => console.error(err));


fs.promises
  .unlink(filePath)
  .then(() => console.log("Deleted"))
  .catch((err) => console.error(err));


