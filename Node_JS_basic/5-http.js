const http = require('http');
const students = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const asked = (req.url);
  if (asked === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  }
  if (asked === '/students') {
    res.writeHead(200);
    res.write('This is the list of our students\n');
    students(process.argv[2])
      .then((data) => {
        res.end(data);
      })
      .catch((error) => {
        res.end(error.message);
      });
  }
}).listen(1245);

module.exports = app;
