require('dotenv').config();

const http = require('http');

const app = require('./config/app');
const config = require('./config/config');

const server = http.createServer(app());

server.listen(config.port, config.hostname);
server.on('listening',()=>{
    console.log(`Server started on ${config.hostname}:${config.port} in ${config.NODE_ENV} mode`);
})