#!/usr/bin/node

const req = require('fs');
const filePath = process.argv[2];
req.readFile(filePath, 'utf-8', function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
