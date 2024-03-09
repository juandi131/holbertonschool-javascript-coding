const express = require('express');
const cS = require('./3-read_file_async');

const app = express().get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  cS(process.argv[2])
    .then((data) => {
      res.end(data);
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(1245);
module.exports = app;