#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (err, _response, body) {
  if (err) {
    console.log(err);
  } else {
    const users = JSON.parse(body);
    const completed = users.reduce((acc, user) => {
      if (user.completed) {
        acc[user.userId] = (acc[user.userId] || 0) + 1;
      }
      return acc;
    }, {});
    console.log(completed);
  }
});
