var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let dis = parseInt(lines.shift());
let timeY = dis*2;

console.log(timeY + " minutos");
