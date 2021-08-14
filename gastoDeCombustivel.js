var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let timeSpent = parseFloat(lines.shift());
let vM =  parseFloat(lines.shift());
let dis = timeSpent*vM;
let con = (dis/12).toFixed(3);
console.log(con);
