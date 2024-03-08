const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

module.exports = app;

app.listen(1245);
