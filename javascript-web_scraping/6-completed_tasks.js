#!/usr/bin/node

const request = require('request');
const args = process.argv;

request.get(args[2], '', (err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    const dict = {};
    const users = JSON.parse(body);

    for (const user of users) {
      if (user.completed) {
        if (dict[user.userId]) {
          dict[user.userId] += 1;
        } else {
          dict[user.userId] = 1;
        }
      }
    }

    console.log(dict);
  }
});
