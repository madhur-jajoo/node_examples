const debug = require('debug')('app');
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  //all debugs in this file will be logged with 'app' attached as its first word
  debug(req.method + " " + req.url);
  res.send(`You are at ${req.hostname}: ${req.ip}`);
});

module.exports = function() {
  return app;
};
