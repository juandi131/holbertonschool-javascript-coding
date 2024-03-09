const http = require('http');
const fs = require('fs').promises;

const countStudents = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');

    return `Number of students: ...\nNumber of students in CS: ...`;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const filePath = process.argv[2]; // La ruta del archivo CSV se pasa como argumento
      const text = await countStudents(filePath);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${text}`);
    } catch (error) {
      res.writeHead(500);
      res.end(error.message);
    }
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

app.listen(1245);
console.log('Server listening on port 1245');

module.exports = app;
