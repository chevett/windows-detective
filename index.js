var detective = require('detective');
var fs = require('fs');
var src = fs.readFileSync('some-module.js', 'utf8');

console.dir(detective(src));
