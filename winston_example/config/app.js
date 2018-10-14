const express = require("express");
const winston = require("./winston");

const app = express();

app.use(winston());
app.get("/", (req, res) => {
  res.send("<h1>Hello Winston</h1>");
});

module.exports = function() {
  return app;
};
