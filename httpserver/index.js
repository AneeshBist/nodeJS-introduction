const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req.url);
  if (req.url === "/") {
    res.end("Hello from the other side");
  } else if (req.url === "/about") {
    res.end("Hello from the About us page");
  } else if (req.url === "/contact") {
    res.write("Hello from the Contact page");
    res.end();
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 Page doest not exist</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
