#!/usr/bin/node

const req = require('request');
const filePath = process.argv[2];
req(filePath, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log('code: ' + response.statusCode);
  }
});
