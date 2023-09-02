#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);

function incr () {
  this.value++;
}

// Utilisez bind pour lier la fonction incr à myObject
myObject.incr = incr.bind(myObject);

// Redéfinissez la méthode toString pour supprimer la mention "[Function: bound incr]"
myObject.incr.toString = function () {
  return 'function incr() { [native code] }';
};

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
