const http = require('http');
const students = require('./3-read_file_async');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    fs.readFile('./students.csv', 'utf8', (err, data) => {
      if (err) {
        res.end(err);
      }
      res.write('This is the list of our students\n');
      students(process.argv[2]).then((data) => {
        res.write(`Number of students: ${data.students.length}\n`);
        res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
        res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
        res.end(data);
      });
    });
  }
});

module.exports = app;

app.listen(1245);
