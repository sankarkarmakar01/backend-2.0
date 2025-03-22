const fs = require("fs");
const path = require("path");

const fileName = "fsAsycn.txt";
const filePath = path.join(__dirname, fileName);

// fs.writeFile(filePath, "This is the initial data", "utf-8", (err) => {
//   if (err) console.error(err);
//   else console.log("File has been saved");
// });

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) console.error(err);
//   else console.log(data);
// });

// fs.appendFile(filePath, "\nHello World!", "utf-8", (err) => {
//   if (err) console.error(err);
//   else console.log("File has been updated");
// });

fs.unlink(filePath, (err) => {
  if (err) console.error(err);
  else console.log("File has been deleted");
});
