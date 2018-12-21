'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(req.hostname);
});

app.listen(3000, err => {
  if (err) throw err;
  console.log('Server started on port 3000');
});
