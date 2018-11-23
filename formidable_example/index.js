require('dotenv').config();

const fs = require('fs');
const http = require('http');
const app = require('./config/app');
const config = require('./config/config');

fs.existsSync('./uploads') || fs.mkdirSync('./uploads');

const server = http.createServer(app);

server.listen(config.PORT);

server.on('listening', () => {
  console.log(`Server started on port ${config.PORT}`);
});
