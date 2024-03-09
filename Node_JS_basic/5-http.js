const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.statusCode = 200;
    let consoleOutput = '';

    const originalConsoleLog = console.log;
    console.log = (message) => {
      consoleOutput += `${message}\n`;
    };
    countStudents(process.argv[2])
      .then((data) => {
        res.end(`This is the list of our students\n${consoleOutput.trim()}`);
      })
      .catch((error) => {
        res.statusCode = 400;
        res.write(`This is the list of our students\nCannot load the database`);
        res.end();
      });
  }
}).listen(1245);

module.exports = app;
