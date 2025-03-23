const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("I am Sankar Karmakar");
    res.end();
  }
  if (req.url === "/source") {
    res.write("I am Source Code");
    res.end();
  }
});

const PORT = 3000;
server.listen(3000, () => {
  console.log(`Listening on PORT ${PORT}`);
});


