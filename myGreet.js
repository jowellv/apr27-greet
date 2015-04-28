'use strict';



function greet(passedName) {
  var name = process.argv[2] || passedName;
  return 'hello ' + name;
}
console.log(greet());
module.exports = greet;
