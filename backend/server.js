// importing the default package 'http' form node js
const http = require("http");
const PORT = 3001;
const fs = require("fs");

// creating server on http
const server = http.createServer((req, res) => {
  // common practice that response headers must be send first
  res.writeHead(200, { "Content-Type": "text/html" });
  // reading the index.html file which is placed at the current directory
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(400);
      res.write("Page not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

// listen to the port & check it is working or not. If console log happens, then server is working.
server.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`server is running on port: ${PORT}`);
  }
});
