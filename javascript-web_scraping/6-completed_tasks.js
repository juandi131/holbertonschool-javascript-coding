const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
/* eslint-disable */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    let consoleOutput = '';
    const originalConsoleLog = console.log; // Almacena la función original

    console.log = (message) => {
      consoleOutput += `${message}\n`; // Captura la salida de console.log
    };

    await countStudents(process.argv[2]);

    console.log = originalConsoleLog; // Restaura la función original de console.log

    res.send(`This is the list of our students\n${consoleOutput.trim()}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});
app.listen(1245);

module.exports = app;
