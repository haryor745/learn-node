const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Homepage baby");
  } else if (req.url === "/about") {
    res.end("Welcome to About baby");
  } else {
    res.end(`<h1>Rest.</h1>
    <a href="/">go home mumu</a>`);
  }
});

server.listen(5000);
