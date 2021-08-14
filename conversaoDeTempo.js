var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempo = parseInt(lines.shift());
let hora =  parseInt(tempo/3600);
let min = parseInt(tempo/60) % 60;
let seg = parseInt(tempo%60);


console.log(hora + ":" + min + ":" + seg);
