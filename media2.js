var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift()) * 2; 
var b = parseFloat(lines.shift()) * 3; 
var c = parseFloat(lines.shift()) * 5;
var med = (a + b + c)/10;

console.log(`MEDIA = ${med.toFixed(1)}`)