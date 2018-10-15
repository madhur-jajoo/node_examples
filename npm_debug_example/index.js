require('dotenv').config();

const debug = require('debug')('index');
const http = require('http');

debug('First debug line to run');

const server = http.createServer(require('./config/app')());
server.listen(process.env.PORT, process.env.HOSTNAME);
server.on('listening', ()=>{
    //all debugs in this file will be logged with 'index' attached as its first word
    debug(`Server started on ${process.env.HOSTNAME}:${process.env.PORT} in ${process.env.NODE_ENV} mode`);
    console.log(`Server started on ${process.env.HOSTNAME}:${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})