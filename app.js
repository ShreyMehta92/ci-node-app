// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from CI-CD app! My ID is: 23IT061');
});

module.exports = app;
