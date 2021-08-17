var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var a = parseFloat(lines.shift()) * 3.5; 
var b = parseFloat(lines.shift()) * 7.5; 
var med = (a + b)/11;

console.log(`MEDIA = ${med.toFixed(5)}`);