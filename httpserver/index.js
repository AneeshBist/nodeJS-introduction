const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/user-api/user-api.json`);
  const objData = JSON.parse(data);

  //console.log(req.url);
  if (req.url === "/") {
    res.end("Hello from the other side");
  } else if (req.url === "/about") {
    res.end("Hello from the About us page");
  } else if (req.url === "/contact") {
    res.write("Hello from the Contact page");
    res.end();
  } else if (req.url === "/userapi") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(objData[0].first_name);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 Page doest not exist</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
