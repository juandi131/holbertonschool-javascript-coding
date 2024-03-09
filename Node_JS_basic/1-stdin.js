const { stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  stdout.write('Your name is: ' + name + '\r');
  console.log('');
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
