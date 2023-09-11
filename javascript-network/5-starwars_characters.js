#!/usr/bin/node

const req = require("request");
const id = process.argv[2];

const url = `https://swapi.dev/api/people/${id}`;

req.get(url, { encoding: 'utf-8'})
    .on('data', (data )=>{
    const response = JSON.parse(data);
    console.log(response.name);
});