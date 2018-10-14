require("dotenv").config();
const http = require("http");

const app = require("./config/app");

const server = http.createServer(app());

server.listen(process.env.PORT, process.env.HOSTNAME);
server.on("listening", () => {
  console.log(`Server started on ${process.env.HOSTNAME}:${process.env.PORT}`);
});
