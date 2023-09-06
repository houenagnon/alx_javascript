#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);



// Utilisez bind pour lier la fonction incr à myObject
myObject.incr = function () {
  this.value++;
}

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
