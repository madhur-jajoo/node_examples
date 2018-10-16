const http = require("http");

const config = require("./config/config");
const app = require("./config/app");

const server = http.createServer(app());

server.listen(config.PORT, config.HOSTNAME);
server.on("listening", () => {
    console.log(`Server started on ${config.HOSTNAME}: ${config.PORT} in ${config.NODE_ENV} mode`);
});
