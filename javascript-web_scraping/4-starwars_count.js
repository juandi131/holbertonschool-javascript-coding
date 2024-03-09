#!/usr/bin/node

const req = require('request');
const film = process.argv[2];
req(film, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    let appear = 0;
    const movies = JSON.parse(body).results;
    for (const movie of movies) {
      for (const char of movie.characters) {
        if (char.includes('18')) {
          appear++;
        }
      }
    }
    console.log(appear);
  }
});
