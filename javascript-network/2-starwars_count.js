#!/usr/bin/node

// Write a script that prints the number of movies where the character “Wedge Antilles” is present.

//     The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
//     Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
//     You must use the module request

const { object } = require('assert-plus');
const req = require('request');
const url = process.argv[2];
let data = '';

req.get(url, {encoding: "utf-8"})
  .on('data', (chunk) => {
    data += chunk;
  })
  .on('end', () => {
    response = JSON.parse(data);
    // console.log((response.results).length)
    //  console.log(response.results);
    let count = 0;
    for (const res in response.results) {
      const characters = response.results[res].characters;
      //  console.log(response.results[res].title + response.results[res].characters);
      //  console.log(Object.keys(response.results[res]));
      for (const c in characters) {
        if (characters[c] === 'https://swapi-api.alx-tools.com/api/people/18/') {
          count += 1;
        }
      }
    }
    console.log(count);
  })
  .on('error', (error) => {
    console.error('Request error:', error);
  });
