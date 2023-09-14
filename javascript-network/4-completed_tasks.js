#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

const response = {};

request.get(url)
  .on('data', (data) => {
    const todos = JSON.parse(data);

    todos.forEach((todo) => {
      if (todo.completed) {
        response[todo.userId] = (response[todo.userId] || 0) + 1;
      }
    });
  })
  .on('end', () => {
    console.log(response);
  })
  .on('error', (error) => {
    console.error('Une erreur s\'est produite :', error);
  });
