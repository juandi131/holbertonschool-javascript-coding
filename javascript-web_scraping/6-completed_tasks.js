#!/usr/bin/node

const r = require('request');
r(process.argv[2], (e, res) => {
  const completed = [];
  const usrs = {};
  let x = 0;

  for (const user of JSON.parse(res.body)) {
    if (user.completed === true) {
      completed.push(user.userId);
    }
  }

  for (const id of completed) {
    for (const user of JSON.parse(res.body)) {
      if (user.completed === true) {
        if (user.userId === id) { x += 1; }
      }
    }
    usrs[id] = x;
    x = 0;
  }
  console.log(usrs);
});