const http = require('http');
const countStudents = require('./3-read_file_async');

const DATABASE = process.argv[2];
const port = 1245;

const app = http.createServer(async (req, res) => {
  const { url } = req;

  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    try {
      const students = await countStudents(DATABASE);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`This is the list of our students\n${students}`);
    } catch (error) {
      res.statusCode = 500;
      res.end(`Error: ${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
