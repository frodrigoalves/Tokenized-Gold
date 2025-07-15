const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Tokenized Gold API');
});

module.exports = app;
