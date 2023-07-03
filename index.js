const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const rs = fs.createReadStream("./data.txt");
  rs.on("data", (data) => {
    res.write(data);
  });
  rs.on('end', ()=>{
    res.end();
  })
});
server.listen(8080, "localhost", () => {
  console.log("STARTED BACKEND BITCH!");
});
