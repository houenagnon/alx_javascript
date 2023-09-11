#!/usr/bin/node

const req = require("request");
const id = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

let responseData = '';

const request = req.get(url, { encoding: 'utf-8' });

request.on('data', (chunk) => {
  responseData += chunk;
});

request.on('end', () => {
  try {
    const response = JSON.parse(responseData);
    console.log(response.title);
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});

request.on('error', (error) => {
  console.error('Request error:', error);
});
