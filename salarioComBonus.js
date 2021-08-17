var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var name = (lines.shift()); 
var fixedSalary = parseFloat(lines.shift()); 
var salesMade = parseFloat(lines.shift());

console.log(`TOTAL = R$ ${((salesMade * 15/100) + fixedSalary).toFixed(2)}`);