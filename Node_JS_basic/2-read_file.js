const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  try {
    // Verificar si el archivo existe
    if (!fs.existsSync(filePath)) {
      throw new Error('Cannot load the database');
    }

    // Leer el archivo de forma sincrónica
    const data = fs.readFileSync(filePath, { encoding: 'utf8' });
    const lines = data.split('\n').filter((line) => line !== '');

    // Eliminar la línea de encabezado
    lines.shift();

    const students = lines.map((line) => {
      const [firstName, , field] = line.split(',');
      return { firstName, field };
    });

    const count = students.length;
    console.log(`Number of students: ${count}`);

    // Agrupar estudiantes por campo
    const fields = {};
    students.forEach((student) => {
      if (!fields[student.field]) {
        fields[student.field] = [];
      }
      fields[student.field].push(student.firstName);
    });

    Object.keys(fields).forEach((field) => {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });
  } catch (error) {
    throw error;
  }
}

module.exports = countStudents;
