const fs = require('fs');

const countStudents = async (file) => {
  let content;
  try {
    content = await fs.promises.readFile(file, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  let lines = content.split('\n').filter((line) => line !== '').slice(1);
  console.log(`Number of students: ${lines.length}`);

  // Asumiendo que el campo es el tercer elemento basado en tu descripción anterior
  const fields = lines.map((line) => line.split(',')[2]);
  const uniqueFields = [...new Set(fields)];

  const studentsByField = {};

  for (let i = 0; i < uniqueFields.length; i += 1) {
    const field = uniqueFields[i];
    const studentsInField = lines.filter((line) => line.split(',')[2] === field);
    const numStudents = studentsInField.length;
    const names = studentsInField.map((line) => line.split(',')[0]);

    console.log(`Number of students in ${field}: ${numStudents}. List: ${names.join(', ')}`);

    studentsByField[field] = {
      numStudents,
      names,
    };
  }

  return studentsByField;
};

module.exports = countStudents;
