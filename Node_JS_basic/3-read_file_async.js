const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        const fields = lines[0].split(',');
        const students = lines.slice(1).filter((line) => line.length > 0);
        const studentCounts = {};
        for (let i = 0; i < fields.length; i += 1) {
          studentCounts[fields[i]] = 0;
        }
        for (let i = 0; i < students.length; i += 1) {
          const student = students[i].split(',');
          for (let j = 0; j < fields.length; j += 1) {
            if (student[j] === 'yes') {
              studentCounts[fields[j]] += 1;
            }
          }
        }
        console.log(`Number of students: ${students.length}`);
        for (const field in studentCounts) {
          console.log(`Number of students in ${field}: ${studentCounts[field]}. List: ${students.filter((student) => student.split(', ')[fields.indexOf(field)] === 'yes').map((student) => student.split(', ')[0]).join(', ')}`);
        }
        resolve(true);
      }
    });
  });
}

module.exports = countStudents;
