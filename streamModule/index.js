const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) console.error(err);
  //     res.end(data.toString());
  //   });

  //   const rsstream = fs.createReadStream("input.txt");
  //   rsstream.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });
  //   rsstream.on("end", () => {
  //     res.end();
  //   });
  //   rsstream.on("error", (err) => {
  //     console.log(err);
  //     res.end("file not found");
  //   });

  const rsstream = fs.createReadStream("input.txt");
  rsstream.pipe(res);
});

server.listen(8000, "127.0.0.1");
