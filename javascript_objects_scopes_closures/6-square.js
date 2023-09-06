#!/usr/bin/node

// Write a class Square that defines a square and inherits from Square of 5-square.js:

//     You must use the class notation for defining your class and extends
//     Create an instance method called charPrint(c) that prints the rectangle using the character c
//         If c is undefined, use the character X

const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    if (c === undefined) {
      this.print();
    } else {
      for (let i = 0; i < this.height; i++) {
        let line = '';
        for (let j = 0; j < this.width; j++) {
          line += c;
        }
        console.log(line);
      }
    }
  }
}

module.exports = Square;
