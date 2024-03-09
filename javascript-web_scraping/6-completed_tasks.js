#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }
  const arr = [];
  const tasks = JSON.parse(body).filter(val => val.completed === true);
  tasks.forEach(function (task) {
    if (arr[task.userId - 1] == null) {
      arr[task.userId - 1] = 0;
    }
    arr[task.userId - 1] += 1;
  });
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i + 1] = arr[i];
  }
  console.log(obj);
});