const express = require("express");
const logger = require('./logger');

const app = express();

app.use(logger);
app.get('/', (req, res)=>{
    res.send(`You hit morgan logger from ip ${req.ip}`);
})

module.exports = function(){
    return app;
}