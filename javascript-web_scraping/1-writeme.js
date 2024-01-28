#!/usr/bin/node

const req = require('fs');
const filePath = process.argv[2];
const wr = process.argv[3];
req.writeFile(filePath, wr, 'utf-8', function (error) {
  if (error) {
    console.log(error);
  }
});
