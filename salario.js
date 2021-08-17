var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift()); 
var hT = parseInt(lines.shift()); 
var valorHora = parseFloat(lines.shift());

var salario = (hT * valorHora);

console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);