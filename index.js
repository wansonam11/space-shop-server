var http = require("http");
var hostname = "127.0.0.1";
var port = 8080;

const server = http.createServer(function (req, res) {
  console.log("Request : ", req);
  res.end("Hello, Client!");
});

server.listen(port, hostname);

console.group("[Space Shop Sever On]");
