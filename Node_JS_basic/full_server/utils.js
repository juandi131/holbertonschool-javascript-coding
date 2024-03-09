import fs from 'fs';

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      }
      if (data) {
        const students = data.split('\n');
        const fields = students[0].split(',');
        const studentsData = students.slice(1).map((student) => {
          const studentData = student.split(',');
          return studentData.reduce((acc, curr, index) => {
            acc[fields[index]] = curr;
            return acc;
          }, {});
        });
        resolve(studentsData);
      }
    });
  });
}

module.exports = readDatabase;
