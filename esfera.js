var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var R = parseFloat(lines);
var pi = 3.14159;

var volume = ((4/3.0)*pi*R*R*R).toFixed(3);

console.log(`VOLUME = ${volume}`)