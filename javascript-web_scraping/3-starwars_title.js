#!/usr/bin/node

const req = require('request');
const filmN = process.argv[2];
const film = 'https://swapi-api.hbtn.io/api/films/';
req(film + filmN, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.parse(body).title);
  }
});
