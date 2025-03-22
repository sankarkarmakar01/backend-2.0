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

const readFolder = async () => {
  try {
    const data = await fs.promises.readdir(file);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

readFolder();
