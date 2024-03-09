#!/usr/bin/node

const req = require('request');
const lorem = process.argv[3];
const filePath = process.argv[2];
const f = require('fs');
req(filePath, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    f.writeFile(lorem, body, 'utf-8', function (error) {
      if (error) {
        console.log(error);
      }
    });
  }
});
